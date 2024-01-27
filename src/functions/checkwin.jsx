const winningPositions = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

const CheckWin = ({ board: { board, setBoard }, isX }) => {
	const isDraw = () => board.filter((e) => e !== null).length === 9;
	const isWin = () => {
		return winningPositions.some((combination) => {
			const [a, b, c] = combination;
			return board[a - 1] === board[b - 1] && board[b - 1] === board[c - 1] && board[a - 1] !== null;
		});
	};
	return (
		<>
			{isWin() ? (
				<>
					<p>Yeah! Player {!isX ? "X" : "O"} has won! Congrats!</p>
					<button onClick={() => setBoard(Array.from(Array(9)).fill(null))}>Reset</button>
				</>
			) : (
				isDraw() && (
					<>
						<p>Победила дружба!!</p>
						<button onClick={() => setBoard(Array.from(Array(9)).fill(null))}>Reset</button>
					</>
				)
			)}
		</>
	);
};

CheckWin.propTypes;

export default CheckWin;
