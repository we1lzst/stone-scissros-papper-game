let Loading = (props) => {
    if (props.isLoading === false) {
        return <h1>Идёт загрузка игры</h1>
    } else {
        return <h1>Ошибка</h1>
    }
}

export default Loading;