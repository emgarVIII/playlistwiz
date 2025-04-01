import Image from "next/image";
import styles from "./page.module.css";
import Form from "next/form"
import Song from "./song.js"

export default function Home() {
    return (
    <div>
        <header>
            <div className="heading">
                <span>playlistwiz</span>
                <span><a>Library</a></span>
                <span><Form action="/search">
                    {/* On submission, the input value will be appended to
                        the URL, e.g. /search?query=abc */}
                    <input name="query" />
                    <button type="submit">SEARCH</button>
                    </Form></span>
                <span style={{float:"right"}}>Sign Up/Log In</span>
            </div>
        </header>

        <body>
            <Song id="test"/>
        </body>

    </div>
    );
}
