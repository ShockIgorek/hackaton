import '../app-header/app-header.css';

function AppHeader() {
    return (
        <div className = "App-header">хэдар
            <a href="#" className="App-header_part">лого</a>
            <a href="#" className="App-header_part">о команде</a>
            <a href="#" className="App-header_part">о нас</a>
            <a href="#" className="App-header_part">блок вакансий</a>
            <a href="#" className="App-header_part">что мы предлогаем</a>
            <a href="#" className="App-header_part">обратная связь</a>
        </div>
    );
}

export default AppHeader;