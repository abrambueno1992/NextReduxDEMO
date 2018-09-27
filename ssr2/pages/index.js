import './index.css';
import Card from './Card';
import Link from 'next/link';
export default () => (
    <div className="App">
        <header className="App-header"></header>
        <Link href="/page2">
        <img src="/static/logo.png" 
            className="static-logo" alt="logo"
            />
        </Link>
            
        <div className="Grid">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
)