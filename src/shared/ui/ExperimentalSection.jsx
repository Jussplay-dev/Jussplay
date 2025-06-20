import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Container } from './WrapperContainer'
import styles from './styles.module.scss'

export const ExperimentalSection = () => {
	const containerCubeRef = useRef(null)
	const loadedModel = useRef(null)

	useEffect(() => {
		if (!containerCubeRef.current) return

		// 1. Сцена
		const scene = new THREE.Scene()
		scene.background = new THREE.Color('black')

		// 2. Камера
		const containerWidth = containerCubeRef.current.clientWidth
		const containerHeight = containerCubeRef.current.clientHeight

		const camera = new THREE.PerspectiveCamera(
			50,
			containerWidth / containerHeight,
			// *** ИЗМЕНЕНО: ближняя плоскость отсечения ***
			0.1, // Уменьшено с 1 до 0.1, чтобы избежать отсечения, когда камера близко к объекту
			1000
		)
		// *** ИЗМЕНЕНО: позиция камеры по Z ***
		// Отрегулируйте это значение, чтобы камера оказалась снаружи модели.
		// Начните с большего значения (например, 20-50), если модель кажется очень большой,
		// и уменьшайте, пока не увидите модель целиком.
		camera.position.z = 5 // Пример: 5 единиц от начала координат

		// 3. Рендерер
		const renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setSize(containerWidth, containerHeight)
		containerCubeRef.current.appendChild(renderer.domElement)

		// 4. Загрузка 3D-модели
		const loader = new OBJLoader()

		loader.load(
			'/JPD-Static1.obj', // Убедитесь, что этот путь верен относительно вашей публичной/статической папки
			obj => {
				loadedModel.current = obj

				obj.traverse(child => {
					if (child.isMesh) {
						// Устанавливаем материал для всех мешей модели
						// side: THREE.DoubleSide помогает рендерить обе стороны полигонов,
						// что полезно, если нормали модели смотрят в "неправильную" сторону
						child.material = new THREE.MeshBasicMaterial({
							color: 'white',
							side: THREE.DoubleSide,
						})
					}
				})

				// *** ИЗМЕНЕНО: Масштабируем модель ***
				// Это самый важный шаг. Модели часто импортируются с огромными или очень маленькими размерами.
				// Начните с очень маленького масштаба (например, 0.01 или 0.001) и увеличивайте его.
				loadedModel.current.scale.set(0.01, 0.01, 0.01) // Уменьшаем модель в 100 раз

				// Центрируем модель в начале координат
				const box = new THREE.Box3().setFromObject(loadedModel.current)
				const center = new THREE.Vector3()
				box.getCenter(center)
				loadedModel.current.position.sub(center)

				scene.add(loadedModel.current)

				console.log('3D модель успешно загружена!', loadedModel.current)
				// Выводим размер модели после масштабирования для отладки
				const currentSize = new THREE.Vector3()
				new THREE.Box3().setFromObject(loadedModel.current).getSize(currentSize)
				console.log(
					'Размер модели (после масштабирования):',
					currentSize.x.toFixed(2),
					currentSize.y.toFixed(2),
					currentSize.z.toFixed(2)
				)
			},
			xhr => {
				console.log((xhr.loaded / xhr.total) * 100 + '% загружено')
			},
			error => {
				console.error('Ошибка загрузки 3D модели:', error)
			}
		)

		// ИНИЦИАЛИЗАЦИЯ ORBITCONTROLS
		const controls = new OrbitControls(camera, renderer.domElement)
		controls.enableDamping = true
		controls.enableZoom = false
		controls.enablePan = false
		controls.screenSpacePanning = false

		// ИНИЦИАЛИЗАЦИЯ RAYCASTING
		const raycaster = new THREE.Raycaster()
		const mouse = new THREE.Vector2()

		// 5. Анимация
		let animationFrameId
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate)
			controls.update()
			renderer.render(scene, camera)
		}

		animate()

		// 6. Обработка изменения размеров окна (или контейнера)
		const handleResize = () => {
			const newContainerWidth = containerCubeRef.current.clientWidth
			const newContainerHeight = containerCubeRef.current.clientHeight

			camera.aspect = newContainerWidth / newContainerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(newContainerWidth, newContainerHeight)
			controls.update()
		}

		window.addEventListener('resize', handleResize)

		const onCanvasClick = event => {
			const rect = renderer.domElement.getBoundingClientRect()
			mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
			mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

			raycaster.setFromCamera(mouse, camera)

			const objectsToIntersect = loadedModel.current
				? loadedModel.current.children
				: []
			const intersects = raycaster.intersectObjects(objectsToIntersect, true)

			if (intersects.length > 0) {
				const intersectedObject = intersects[0].object // Сам объект, на который кликнули
				const face = intersects[0].face // Объект, содержащий информацию о грани (нормали, материал)
				const faceIndex = intersects[0].faceIndex // Индекс грани (для BoxGeometry)

				console.log('Кликнули на объект:', intersectedObject)
				console.log('Кликнули на грань (инфо):', face)
				console.log('Индекс грани:', faceIndex)
				console.log(
					'Точка пересечения в мировых координатах:',
					intersects[0].point
				)

				alert(
					`Вы кликнули на часть модели: ${
						intersectedObject.name || intersectedObject.uuid
					}`
				)
			}
		}

		renderer.domElement.addEventListener('click', onCanvasClick)

		// 7. Функция очистки при размонтировании компонента
		return () => {
			window.removeEventListener('resize', handleResize)
			renderer.domElement.removeEventListener('click', onCanvasClick)
			cancelAnimationFrame(animationFrameId)
			if (containerCubeRef.current) {
				containerCubeRef.current.removeChild(renderer.domElement)
			}
			if (loadedModel.current) {
				scene.remove(loadedModel.current)
				loadedModel.current.traverse(child => {
					if (child.isMesh) {
						child.geometry.dispose()
						// Удаляем материалы, если они не используются другими объектами
						if (Array.isArray(child.material)) {
							child.material.forEach(m => m.dispose())
						} else {
							child.material.dispose()
						}
					}
				})
			}
			controls.dispose()
		}
	}, [])

	return (
		<section>
			<Container>
				<h1>Test Box</h1>
				<div
					style={{
						padding: 30,
						marginTop: 80,
						marginBottom: 80,
						backgroundColor: 'white',
					}}
				>
					<div ref={containerCubeRef} className={styles.wrapper_cube3d}></div>
				</div>
			</Container>
		</section>
	)
}
