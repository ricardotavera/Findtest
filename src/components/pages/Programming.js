import React from 'react';

import './Programming.css';
import '../../images/coder.jpg'
import CardItem from '../CardItem';

// function([string1, string2],target id,[color1,color2])    
 
  var aim1 = <div class='console-underscore' id='console'>&#95;</div>;
  
  
  var aim2 = <div class='console-container'><span id='text'></span>{}</div>;
  
function consoleText(words, comp1, comp2, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = comp1;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = comp2;
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

class Programming extends React.Component {

  constructor(props) {
    super(props);
    //creating ref
    this.consoleRef = React.createRef();
    this.textRef = React.createRef();
    window.scrollTo(0, 0)
    

  }

  componentDidMount() {
    consoleText(['Bienvenido coder', 'Hello world!', '!Hola mundo!'], this.consoleRef.current, this.textRef.current, ['tomato','rebeccapurple','lightblue']);
  }


  render() {
    
    return (

      <div>
        <div className='hero-container' >
          <img src="../../images/back.jpg"/>           
         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          <div class='console-container' ><span ref={this.textRef}></span><div class='console-underscore' ref={this.consoleRef} >&#95;</div></div> 
          <br/>
          <br/>
          <br/>
          <br/>
          <h3>En esta sección encontrarás recursos de las asignaturas relacionadas con área de programación y desarrollo tales como: Fundamentos de programación, Estructuras computacionales, Programación orientada a objetos, Estructuras de datos y análisis de algorithmos, Matemáticas discretas, Autómatas y lenguajes formales, proyectos y más.</h3>
          
        </div>
        
        <div className='cards'>
          <h1>Fundamentos de programacion</h1>
          
          <div className='cards__container'>

            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem src="../images/fundaments.jpg" text='Factorial' label='C++' path2='https://replit.com/@DanielRicardoR5/Factorial#main.cpp' />
                <CardItem src="../images/fundaments.jpg" text='Sucesión de Fibonacci' label='C++' path2='https://replit.com/@DanielRicardoR5/Fibonacci-series#main.cpp' />
                <CardItem src="../images/fundaments.jpg" text='Determinar N numeros primos' label='C++' path2='https://replit.com/@DanielRicardoR5/Prime-numbers-generator#main.cpp' />
                <CardItem src="../images/fundaments.jpg" text='Tipo de triángulo' label='C++' path2='https://replit.com/@DanielRicardoR5/Triangle#main.cpp' />

              </ul>

              <ul className='cards__items'>
                <CardItem src="../images/fundaments.jpg" text='Decimal a binario usando recursion' label='Python' path2='https://replit.com/@DanielRicardoR5/DecimaltoBinaryPython#main.py' />
                <CardItem src="../images/fundaments.jpg" text='Cos(x) por series de Taylor         ' label='C++' path2='/calculoButton' />
                <CardItem src="../images/fundaments.jpg" text='Estadística de un vector' label='C++' path2='/calculoButton' />
                <CardItem src="../images/fundaments.jpg" text='Repositorio GitHub' label='C++' path2='https://github.com/ricardotavera/Programming-fundamentals-Cpp' />

              </ul>
            </div>

          </div>

          <h1>Programación orientada a objetos</h1>
          <div className='cards__container'>

            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem src="../images/carro.png" text='Clase carro y sus instancias' label='Java' path2='https://github.com/ricardotavera/Object-oriented-programming/tree/main/carro/src' />
                <CardItem src="../images/library.png" text='Sistema de biblioteca' label='Java' path2="https://github.com/ricardotavera/Object-oriented-programming/tree/main/MrPerez'sLibrary/src/" />
                <CardItem src="../images/shop.png" text='Sistema de ventas con cuatro productos' label='Java' path2='https://github.com/ricardotavera/Object-oriented-programming/tree/main/Tienda/src' />
                <CardItem src="../images/java.png" text='Otros proyectos' label='Code' path2='https://github.com/ricardotavera/Object-oriented-programming' />
              </ul>

            </div>
          </div>

          <h1>Estructuras de datos y análisis de algoritmos</h1>
          <div className='cards__container'>

            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem src="../images/c.png" text='Lenguaje C' label='PDF' path2='https://informatica.uv.es/estguia/ATD/apuntes/laboratorio/Lenguaje-C.pdf' />
                <CardItem src="../images/fundaments.jpg" text='Mapeo de memoria' label='Video' path2="https://youtu.be/y10XU1iF1vo" />
                <CardItem src="../images/data.jpg" text='Listas y sus funciones basicas' label='C' path2='https://github.com/ricardotavera/Data-structures/blob/main/List.c' />
                <CardItem src="../images/data.jpg" text='Pilas (LIFO)' label='C' path2='https://github.com/ricardotavera/Data-structures/blob/main/Stack.c' />
              </ul>

              <ul className='cards__items'>
                <CardItem src="../images/data.jpg" text='Colas (LILO)' label='C' path2='https://github.com/ricardotavera/Object-oriented-programming/tree/main/carro/src' />
                <CardItem src="../images/data.jpg" text='Listas circulares' label='C' path2="https://github.com/ricardotavera/Object-oriented-programming/tree/main/MrPerez'sLibrary/src/" />
                <CardItem src="../images/data.jpg" text='Ejemplo suma de polinomios' label='C' path2='https://github.com/ricardotavera/Object-oriented-programming/tree/main/Tienda/src' />
                <CardItem src="../images/data.jpg" text='Ejemplo computador con short como tipo de dato mas grande' label='C' path2='https://github.com/ricardotavera/Object-oriented-programming' />
              </ul>

              <ul className='cards__items'>
                <CardItem src="../images/data.jpg" text='Arboles' label='C' path2='https://github.com/ricardotavera/Data-structures/blob/main/PreorderTree.cpp' />
                <CardItem src="../images/data.jpg" text='Heap' label='C' path2="https://github.com/ricardotavera/Data-structures/blob/main/Heap.cpp" />
                <CardItem src="../images/data.jpg" text='Cola de prioridad' label='C' path2='https://github.com/ricardotavera/Data-structures/blob/main/PreorderTree.cpp' />
                <CardItem src="../images/data.jpg" text='Otras estructuras en repo de GitHub' label='Code' path2='https://github.com/ricardotavera/Data-structures' />
              </ul>

            </div>
          </div>

          <h1>Algorithmos de ordenamiento</h1>
          <div className='cards__container'>

            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem src="../images/sortingVisualizer.jpg" text='Bubble sort (Ordenamiento burbuja)' label='C++' path2='https://github.com/ricardotavera/Sorting-algorithms/blob/main/Bubble%20sort.cpp' />
                <CardItem src="../images/sortingVisualizer.jpg" text='Merge Sort (Ordenamiento por fusion)' label='C++' path2="https://github.com/ricardotavera/Sorting-algorithms/blob/main/Merge%20sort.cpp" />
                <CardItem src="../images/sortingVisualizer.jpg" text='Quick sort (Ordenamiento rapido)' label='C++' path2='https://github.com/ricardotavera/Sorting-algorithms/blob/main/Quick%20sort.cpp' />
                <CardItem src="../images/sortingVisualizer.jpg" text='Otros algoritmos de ordenamiento' label='C++' path2='https://github.com/ricardotavera/Sorting-algorithms' />
              </ul>


            </div>
          </div>

          <h1>Grafos</h1>
          <div className='cards__container'>

            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem src="../images/astar.jpg" text='Visualizador optimización de ruta con A*' label='Python' path2='https://replit.com/@DanielRicardoR5/Astar-finding-path#main.py' />
                <CardItem src="../images/pathVisualizer.jpg" text='Algoritmo de Dijkstra' label='JavaScript' path2="https://github.com/clementmihailescu/Pathfinding-Visualizer-Tutorial/blob/master/src/algorithms/dijkstra.js" />
                <CardItem src="../images/socorro.jpeg" text='Optimizacion de recorrido en Socorro (Sder)' label='Python' path2='https://colab.research.google.com/drive/1oiZTCINTzyUrrHLeI4t2CINnWWJ4eovp#scrollTo=VqAXo4ub2E6r' />

              </ul>

            </div>
          </div>
          <h1>Visualizadores de algoritmos</h1>
          <div className='cards__container'>

            <div className='cards__wrapper'>

              <ul className='cards__items'>
                <CardItem video="../videos/sorting.mp4" text='Visualizador de algoritmos de ordenamiento' label='JavaScript' path2='https://clementmihailescu.github.io/Sorting-Visualizer/' />
                <CardItem video="../videos/path.mp4" text='Visualizador de algoritmos de optimizacion de ruta' label='JavaScript' path2='https://clementmihailescu.github.io/Pathfinding-Visualizer/#' />
                <CardItem video="../videos/heap.mp4" text='Visualgo' label='WebSite' path2='https://visualgo.net/' />

              </ul>

            </div>
          </div>

          <h1>Automatas y lenguajes formales</h1>
          <div className='cards__container'>

            <div className='cards__wrapper'>

              <ul className='cards__items'>
                <CardItem src="../images/automatas.jpg" text='Libro Automatas y Lenguajes' label='PDF' path2='https://drive.google.com/file/d/14kmqAmXiqEd1nJjP34nmihLg1reAcp6c/view?usp=sharing' />
                <CardItem src="../images/autom.jpg" text='Automata finito determinista (DFA)' label='Python' path2='https://blog.devgenius.io/finite-automata-implement-a-dfa-in-python-64dc3d7005d9' />
                <CardItem src="../images/autom.jpg" text='Automata finito no determinista (NFA)' label='Python' path2='https://www.geeksforgeeks.org/designing-non-deterministic-finite-automata-set-1/?ref=lbp' />

              </ul>

            </div>
          </div>
        </div>
      </div>
    )

  }
}



export default Programming
