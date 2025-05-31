import { useCallback, useEffect, useRef } from 'react'
import styles from './cursor.module.scss'

export const CustomCursor = () => {
	const cursorRef = useRef(null)
	const rafRef = useRef(null)
	const mouse = useRef({ x: 0, y: 0 })
	const cursorPosition = useRef({ x: 0, y: 0 })
	const smoothingFactor = 1

	const handleMouseMove = useCallback(e => {
		mouse.current.x = e.pageX
		mouse.current.y = e.pageY
	}, [])

	const updateCursorPosition = useCallback(() => {
		if (!cursorRef.current) {
			rafRef.current = requestAnimationFrame(updateCursorPosition)
			return
		}

		cursorPosition.current.x +=
			(mouse.current.x - cursorPosition.current.x) * smoothingFactor
		cursorPosition.current.y +=
			(mouse.current.y - cursorPosition.current.y) * smoothingFactor

		cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0)`

		rafRef.current = requestAnimationFrame(updateCursorPosition)
	}, [smoothingFactor])

	const handleDocumentHover = useCallback(e => {
		if (cursorRef.current) {
			const target = e.target

			const isInteractive =
				target.tagName === 'A' ||
				target.closest('a') ||
				target.tagName === 'BUTTON' ||
				target.closest('[data-cursor-hover]')

			if (isInteractive) {
				cursorRef.current.classList.add(styles.hover)
			} else {
				cursorRef.current.classList.remove(styles.hover)
			}
		}
	}, [])

	const handleMouseDown = useCallback(() => {
		if (cursorRef.current) {
			cursorRef.current.classList.add(styles.clicked)
		}
	}, [])

	const handleMouseUp = useCallback(() => {
		if (cursorRef.current) {
			cursorRef.current.classList.remove(styles.clicked)
		}
	}, [])

	useEffect(() => {
		cursorPosition.current = { x: mouse.current.x, y: mouse.current.y }

		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseover', handleDocumentHover)
		document.addEventListener('mousedown', handleMouseDown)
		document.addEventListener('mouseup', handleMouseUp)

		rafRef.current = requestAnimationFrame(updateCursorPosition)

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseover', handleDocumentHover)
			document.removeEventListener('mousedown', handleMouseDown)
			document.removeEventListener('mouseup', handleMouseUp)
			cancelAnimationFrame(rafRef.current)
		}
	}, [
		handleDocumentHover,
		handleMouseMove,
		updateCursorPosition,
		handleMouseUp,
		handleMouseDown,
	])

	return (
		<div
			ref={cursorRef}
			className={styles.customCursor}
			key={'custom-cursor'}
		></div>
	)
}

// import React, { useEffect, useRef, useState } from 'react';
// import styles from './cursor.module.scss'; // SCSS modülünü import ediyoruz

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const TAIL_LENGTH = 20;
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorHistory, setCursorHistory] = useState(
//     Array(TAIL_LENGTH).fill({ x: 0, y: 0 })
//   );

//   const onMouseMove = (event) => {
//     setMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   useEffect(() => {
//     if (!cursorRef.current) return; // cursorRef.current yoksa hiçbir şey yapma
//     const cursorCircles = cursorRef.current.querySelectorAll(`.${styles.cursorCircle}`);
//     const cursorArray = Array.from(cursorCircles);

//     const updateCursor = () => {
//       setCursorHistory((prevHistory) => {
//         const newHistory = [...prevHistory];
//         newHistory.shift();
//         newHistory.push(mousePosition);

//         for (let i = 0; i < TAIL_LENGTH; i++) {
//           let current = newHistory[i];
//           let next = newHistory[i + 1] || newHistory[TAIL_LENGTH - 1];

//           let xDiff = next.x - current.x;
//           let yDiff = next.y - current.y;

//           // Hareketi yavaşlatmak için daha düşük bir hız faktörü
//           current.x += xDiff * 0.95;
//           current.y += yDiff * 0.95;

//           if (cursorArray[i]) {
//             cursorArray[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
//           }
//         }

//         return newHistory;
//       });

//       requestAnimationFrame(updateCursor);
//     };

//     updateCursor();

//     document.addEventListener('mousemove', onMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     };
//   }, [mousePosition]);

//   return (
//     <div  className={styles.cursorCircle} ref={cursorRef}>
//       {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
//         <div key={i} className={styles.cursorCircle} />
//       ))}
//     </div>
//   );
// };

// export default CustomCursor;
