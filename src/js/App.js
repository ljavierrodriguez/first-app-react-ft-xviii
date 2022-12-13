import React from 'react';
import OwnCard from './Card.js';
import ComponentA from './ComponentA.js';
import A from './Components.js';
import ElementoLista from './components/ElementoLista.js';
import Lista from './components/Lista.js';
import { Test } from './Test.jsx';

const App = () => {
    let backend = ["PHP", "JAVA", "PYTHON"];
    let frontend = ["HTML", "CSS", "JAVASCRIPT", "REACT", "VUE"];



    return (
        <>
            <h1>Hola desde React</h1>
            <Test />
            <ComponentA />
            <A />
            <OwnCard />
            <Lista titulo="Lenguajes de Backend">
                <ElementoLista>
                    PHP
                </ElementoLista>
                <ElementoLista>
                    JAVA
                </ElementoLista>
                <ElementoLista>
                    PYTHON
                </ElementoLista>
            </Lista>
            <Lista>
                <ElementoLista>
                    HTML
                </ElementoLista>
                <ElementoLista>
                    CSS
                </ElementoLista>
                <ElementoLista>
                    JAVASCRIPT
                </ElementoLista>
            </Lista>
            <Lista titulo={"Frontend"}>
                {
                    frontend.map((lenguaje, indice) => {
                        return (
                            <ElementoLista key={indice}>
                                {lenguaje}
                            </ElementoLista>
                        )
                    })
                }
            </Lista>
            <Lista titulo={"Backend"}>
                {
                    backend.map((lenguaje, indice) => {
                        return (
                            <ElementoLista key={indice}>
                                {lenguaje}
                            </ElementoLista>
                        )
                    })
                }
            </Lista>
            {/* <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </>
    )
}

export default App;