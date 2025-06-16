/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import JDPloader from '../../components/JDP/JDP'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import { useCheckVisited } from '../../shared/hooks/useCheckVisited'
import styles from './loader.module.scss'

const token = localStorage.getItem('token')

// Maybe return props onCompleted
function Loader() {
	// const [loadPercentage, setLoadPercentage] = useState(0)
	const [hidden, setHidden] = useState(false)
	const [isLottiePlaying, setIsLottiePlaying] = useState(false)
	const navigate = useNavigate()
	const containerRef = useRef(null)
	const audioRef = useRef(null)

	// Make custom hook for auth
	useCheckVisited(token, navigate)

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setLoadPercentage(prev => {
	// 			if (prev >= 100) {
	// 				clearInterval(interval)
	// 				return 100
	// 			}
	// 			return prev + 1
	// 		})
	// 	}, 50)

	// 	return () => clearInterval(interval)
	// }, [])

	// Создаём «взрыв» точек через THREE.js
	const initiateExplosion = () => {
		const movementSpeed = 30
		const totalObjects = 3000
		const objectSize = 3
		let dirs = []
		let parts = []

		const container = containerRef.current
		if (!container) return

		// Настраиваем камеру и сцену
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			10000
		)
		camera.position.z = 1000

		const scene = new THREE.Scene()

		// Конструктор «частиц-взрыв»
		function ExplodeAnimation(x, y) {
			const geometry = new THREE.BufferGeometry()
			const vertices = []

			for (let i = 0; i < totalObjects; i++) {
				vertices.push(x, y, 0)
				dirs.push({
					x: Math.random() * movementSpeed - movementSpeed / 2,
					y: Math.random() * movementSpeed - movementSpeed / 2,
					z: Math.random() * movementSpeed - movementSpeed / 2,
				})
			}

			geometry.setAttribute(
				'position',
				new THREE.Float32BufferAttribute(vertices, 3)
			)
			const material = new THREE.PointsMaterial({ size: objectSize })
			const particles = new THREE.Points(geometry, material)

			this.object = particles
			this.status = true

			scene.add(this.object)

			this.update = () => {
				if (!this.status) return
				const positions = this.object.geometry.attributes.position.array
				for (let i = 0; i < totalObjects * 3; i += 3) {
					positions[i] += dirs[i / 3].x * 0.5
					positions[i + 1] += dirs[i / 3].y * 0.5
					positions[i + 2] += dirs[i / 3].z * 0.5
				}
				this.object.geometry.attributes.position.needsUpdate = true
			}
		}

		const renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setSize(window.innerWidth, window.innerHeight)
		container.appendChild(renderer.domElement)

		// Создаём одну «партию» частиц
		parts.push(new ExplodeAnimation(0, 0))

		// Основная функция рендера THREE.js
		const render = () => {
			requestAnimationFrame(render)
			parts.forEach(part => part.update())
			renderer.render(scene, camera)
		}

		render()

		// Обработчик ресайза
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(window.innerWidth, window.innerHeight)
		}
		window.addEventListener('resize', handleResize)

		// Очистка при анмаунте (если вдруг Loader-разметка размонтируется раньше)
		return () => {
			window.removeEventListener('resize', handleResize)
			container.removeChild(renderer.domElement)
			renderer.dispose()
		}
	}

	// Обработчик клика «Start journey»
	const handleButtonClick = () => {
		// Скрываем цифры и кнопку
		setHidden(true)
		// Запускаем Lottie-анимацию
		setIsLottiePlaying(true)

		// Если есть аудио, проигрываем
		if (audioRef.current) {
			audioRef.current.play().catch(() => {
				// если браузер заблокировал autoplay, можно обработать ошибку
			})
		}

		// Запускаем эффект взрыва через THREE.js
		initiateExplosion()

		// Сразу говорим RootLayout, что лоадер главной страницы «закончился»
		// if (typeof onComplete === 'function') {
		// 	onComplete()
		// }

		// Через 4500 мс переходим на '/home'
		setTimeout(() => {
			navigate('/home')
		}, 4500)
	}

	return (
		<CustomScroll>
			<main className={styles.loader}>
				<audio ref={audioRef} src='/Loading.mp3'></audio>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{/* {loadPercentage === 100 ? ( */}
					{/* // JDPloader — Lottie-анимация */}
					<JDPloader isPlaying={isLottiePlaying} />
					{/* ) : (
						<div className={styles.loader_percent}>{loadPercentage}%</div>
					)} */}
					{!hidden && (
						<div
							className={`${styles.loader_start} ${
								// loadPercentage === 100
								styles.loader_startActive
								// : styles.loader_startInactive
							}`}
							onClick={handleButtonClick}
						>
							Start journey
						</div>
					)}{' '}
					)Ъ
				</div>
				<div
					ref={containerRef}
					style={{ position: 'absolute', top: '0', left: '0' }}
					className='js-explosion'
				></div>
			</main>
		</CustomScroll>
	)
}

export default transition(Loader)
