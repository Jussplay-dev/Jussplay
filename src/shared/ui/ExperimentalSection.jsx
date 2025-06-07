import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Container } from './WrapperContainer'
import styles from './styles.module.scss'

export const ExperimentalSection = () => {
	const containerCubeRef = useRef(null)

	useEffect(() => {
		if (!containerCubeRef.current) return

		// 1. Сцена
		const scene = new THREE.Scene()

		scene.background = new THREE.Color('transparent')

		console.log(scene)

		// 2. Камера
		const containerWidth = containerCubeRef.current.clientWidth
		const containerHeight = containerCubeRef.current.clientHeight

		const camera = new THREE.PerspectiveCamera(
			75,
			containerWidth / containerHeight, // Аспект соотношение контейнера
			0.05,
			1000
		)
		camera.position.z = 1.5

		// 3. Рендерер
		const renderer = new THREE.WebGLRenderer({ antialias: true }) // antialias для сглаживания
		renderer.setSize(containerWidth, containerHeight)
		containerCubeRef.current.appendChild(renderer.domElement) // Добавляем DOM-элемент рендерера в наш контейнер

		// 4. Объект (Куб)
		const geometry = new THREE.BoxGeometry()
		const material = new THREE.MeshBasicMaterial({ color: '#6c5ce7' }) // Hex-цвет для лучшей практики
		const cube = new THREE.Mesh(geometry, material)
		scene.add(cube)

		//  ИНИЦИАЛИЗАЦИЯ ORBITCONTROLS
		const controls = new OrbitControls(camera, renderer.domElement)

		controls.enableDamping = true // Для плавного вращения (опционально)
		controls.enableZoom = false
		controls.enablePan = false
		// controls.dampingFactor = 0.05 // Коэффициент демпфирования (опционально)
		controls.screenSpacePanning = false // Для панорамирования в 2D вместо 3D (опционально)
		// controls.maxPolarAngle = Math.PI / 2; // Ограничение вращения по вертикали (опционально)

		// *** ИНИЦИАЛИЗАЦИЯ RAYCASTING ***
		const raycaster = new THREE.Raycaster()
		const mouse = new THREE.Vector2()

		// 5. Анимация
		let animationFrameId // Для отслеживания ID кадра анимации
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate) // Сохраняем ID

			controls.update()

			renderer.render(scene, camera)
		}

		animate() // Запускаем анимацию

		// 6. Обработка изменения размеров окна (или контейнера)
		const handleResize = () => {
			const newContainerWidth = containerCubeRef.current.clientWidth
			const newContainerHeight = containerCubeRef.current.clientHeight

			camera.aspect = newContainerWidth / newContainerHeight
			camera.updateProjectionMatrix() // Обновляем матрицу проекции после изменения аспекта
			renderer.setSize(newContainerWidth, newContainerHeight)
			controls.update()
		}

		window.addEventListener('resize', handleResize) // Слушаем изменение размера окна

		const onCanvasClick = event => {
			const rect = renderer.domElement.getBoundingClientRect()
			mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
			mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

			raycaster.setFromCamera(mouse, camera)

			const intersects = raycaster.intersectObjects([cube])

			if (intersects.length > 0) {
				const intersectedObject = intersects[0].object
				const face = intersects[0].face
				const faceIndex = intersects[0].faceIndex

				console.log('Кликнули на объект:', intersectedObject)
				console.log('Кликнули на грань:', face)
				console.log('Индекс грани:', faceIndex)

				let sideName = 'Неизвестная сторона'

				if (faceIndex === 0 || faceIndex === 1) {
					sideName = 'Правая сторона (X+)'
				} else if (faceIndex === 2 || faceIndex === 3) {
					sideName = 'Левая сторона (X-)'
				} else if (faceIndex === 4 || faceIndex === 5) {
					sideName = 'Верхняя сторона (Y+)'
				} else if (faceIndex === 6 || faceIndex === 7) {
					sideName = 'Нижняя сторона (Y-)'
				} else if (faceIndex === 8 || faceIndex === 9) {
					sideName = 'Передняя сторона (Z+)'
				} else if (faceIndex === 10 || faceIndex === 11) {
					sideName = 'Задняя сторона (Z-)'
				}

				alert(`Вы кликнули на: ${sideName}`)
			}
		}

		renderer.domElement.addEventListener('click', onCanvasClick)

		// 7. Функция очистки при размонтировании компонента
		return () => {
			window.removeEventListener('resize', handleResize) // Удаляем слушателя события
			cancelAnimationFrame(animationFrameId) // Отменяем цикл анимации
			if (containerCubeRef.current) {
				containerCubeRef.current.removeChild(renderer.domElement) // Удаляем DOM-элемент рендерера
			}
			// Очистка памяти для Three.js объектов (опционально, но хорошая практика для сложных сцен)
			geometry.dispose()
			material.dispose()
			// renderer.dispose(); // Может быть не нужно, если рендерер всегда будет один, но для чистоты можно
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
