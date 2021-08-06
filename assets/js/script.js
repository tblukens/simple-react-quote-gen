const QuoteBox = () => {
	const [quote, setQuote] = React.useState({})

	const getQuote = () => {
		fetch('https://api.quotable.io/random?tags=famous-quotes')
			.then(res => res.json())
			.then(data => setQuote(data))
			.catch(err => console.log(err))
	}

	React.useEffect(() => {
		getQuote()
	}, [])

	return (
		<div id='quote-box'>
			<div id='text'>{quote.content}</div>
			<div id='author'>{quote.author}</div>
			<div id='col1'>
				<a id='tweet-quote' className='bttn-bordered bttn-xs bttn-default'>
					Tweet It!
				</a>
				<button
					id='new-quote'
					className='bttn-bordered bttn-xs bttn-default'
					onClick={getQuote}
				>
					New Quote
				</button>
			</div>
		</div>
	)
}

ReactDOM.render(<QuoteBox />, document.getElementById('root'))
