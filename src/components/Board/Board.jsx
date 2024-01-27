import { useState } from "react";
import BoardCell from "../BoardCell/BoardCell";
import styles from "./styles/css/boar.module.css";
import CheckWin from "../../functions/checkwin.jsx";

const Board = () => {
	const [board, setBoard] = useState(Array.from(Array(9)).fill(null));
	const [isX, setIsX] = useState(true);

	return (
		<>
			<article className={styles.board}>
				{board.map((_, i) => (
					<BoardCell curr={{ isX, setIsX }} board={board} key={i} count={i} />
				))}
			</article>
			{board.filter((e) => e !== null).length > 4 ? <CheckWin board={{ board, setBoard }} isX={isX} /> : null}
		</>
	);
};

export default Board;
