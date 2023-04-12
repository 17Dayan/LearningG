import { Component, OnInit } from '@angular/core';
import { Question as QuizQuestion } from '../models/question.model';

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: number;
  selectedAnswer?: number;
  image?: string;
  video?: string;
}

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  answers: never[];
  text: string;
  correctAnswerIndex: number;
  selectedAnswer: undefined;
  controller = {
    points: 0,
    correctAnswerIndex: -1,

    handleCorrectAnswe(){
      this.points += 10;
    },

    handleAnswerSelection(index: number) {
      if (index === this.correctAnswerIndex) {
        this.handleCorrectAnswe(); 
        
      } else {
        this.onAnswerSelected(false); 
      }
    },

    onAnswerSelected(correct: boolean) {
      if (correct) {
        this.points += 10; // aumenta los puntos en 10 si la respuesta es correcta
      }
    }
  }

  

  constructor() {
    this.text = '';
    this.answers = [];
    this.correctAnswerIndex = -1;
    this.selectedAnswer = undefined;
  }

    public questions: Question[] = [
      {
        question: '¿Cuáles son las tres partes fundamentales de la monografía ?',
        image: '../../assets/img/monografia.jpg',
        option1: 'Desarrollo, Introducción, contenido mismo del tema.',
        option2: 'Índice de cuadros, gráficas y figura.',
        option3: 'Conclusión del tema, Agradecimiento o dedicatoria, Conclusiones.',
        option4: 'Ninguna de las anteriores',
        correctAnswer: 4,
        selectedAnswer: undefined,
      },
      {
        question: 'Una de las modalidades de grado en el instituto universitario de la paz, es:',
        image: '../../assets/img/cogrado.png',
        option1: 'Perfeccionamiento en ciencia, tecnología e innovación.',
        option2: 'Trabajos investigativos',
        option3: 'Seminario de actualización',
        option4: 'Co-grado.',
        correctAnswer: 4,
        selectedAnswer: undefined,
      },
      {
        question: 'Uno de sus objetivos es “Promover en el estudiante la estructuración y escritura de un anteproyecto de investigación que aporte a la solución de problemas en el campo de las ciencias y áreas afines.”',
        image: '../../assets/img/posgrado.jpg',
        option1: 'Pasantías nacionales e internacionales.',
        option2: 'Pasantía de investigación.',
        option3: 'Seminario internacionalización.',
        option4: 'Programa de postgrado.',
        correctAnswer: 1,
        selectedAnswer: undefined,
      },
      {
        question: 'Los estudiantes que se encuentren vinculados a los diferentes semilleros de investigación podrán optar por una pasantía de investigación (nacional o internacional), en el marco de las convocatorias de jóvenes investigadores y/o proyectos de investigación liderados porla institución o una entidad aliada',
        video: '../../assets/videos/investigacion.mp4',
        option1: 'Pasantía de investigación.',
        option2: 'Pasantías nacionales e internacionales.',
        option3: 'Investigación-creación o de creación.',
        option4: 'Ninguna de las anteriores.',
        correctAnswer: 1,
        selectedAnswer: undefined,
      },
      {
        question: 'Para esta modalidad aplican: Obra, Evento artístico, Espectáculo escénico, Piezas sonoras,Producto, Diseño, Artefacto, Objetos plásticos visuales.',
        video: '../../assets/videos/creacion.mp4',
        option1: 'Investigación-creación o de creación.',
        option2: 'Seminario de actualización y perfeccionamiento en ciencia, tecnología e innovación.',
        option3: 'Pasantía de investigación.',
        option4: 'Todas las anteriores.',
        correctAnswer: 1,
        selectedAnswer: undefined,
      },
      {
        question: '¿Cuáles son las opciones de prácticas disponibles para los estudiantes que desean aplicar los conocimientos adquiridos a lo largo de su programa académico en un entorno laboral específico?',
        image: '../../assets/img/internacionalizacion.jpg',
        option1: ' Programa de postgrado(co-grado).',
        option2: ' Pasantías nacionales o internacionales',
        option3: 'Pasantía de investigación.',
        option4: 'Seminario de actualización y perfeccionamiento en ciencia, tecnología e innovación.',
        correctAnswer: 2,
        selectedAnswer: undefined,
      },
      {
        question: '¿Cuál es la modalidad de formación continuada tipo seminario que se ofrece a estudiantes que han dejado vencer el término para la realización de alguna de las modalidades de grado vigentes en UNIPAZ con el objetivo de profundizar sus conocimientos del área disciplinar de pregrado?',
        image: '../../assets/img/seminario.jpg',
        option1: 'Seminario de actualización y perfeccionamiento en ciencia, tecnología e innovación',
        option2: 'Investigación-creación o de creación.',
        option3: 'Pasantías nacionales.',
        option4: 'Pasantías internacionales.',
        correctAnswer: 1,
        selectedAnswer: undefined,
      },
      {
        question: '¿Cuál es una de las condiciones necesarias para acceder al Programa de Postgrado, también conocido como "co-grado"?',
        video: '../../assets/videos/loadcogrado.mp4',
        option1: 'Aplicar a la realidad empresarial los conocimientos, habilidades y destrezas aprendidas',
        option2: 'Desarrollar habilidades de comunicación. ',
        option3: 'Plan de trabajo. ',
        option4: 'El estudiante debe haber cursado el 80% de los créditos de su malla curricular.',
        correctAnswer: 4,
        selectedAnswer: undefined,
      },
      {
        question: '¿Cuál es la duración mínima requerida para que un estudiante pueda participar en el Seminario de internacionalización?',
        video: '../../assets/videos/horas.mp4',
        option1: '60 horas.',
        option2: '45 semanas.',
        option3: '40 horas. ',
        option4: '40 días.',
        correctAnswer: 3,
        selectedAnswer: undefined,
      },
      {
        question: '¿Que opcion puede elegir el estudiante para presentar un articulo despues de finalizar el seminario de internacionalización?',
        image: '../../assets/img/informe.png',
        option1: 'Articulo reflexivo.',
        option2: 'Reporte corto.',
        option3: 'Ensayo.',
        option4: 'Todas las anteriores.',
        correctAnswer: 4,
        selectedAnswer: undefined,
      },
      


    ];
  
    public score = 0;
  
    submitQuiz() {
      this.score = 0;
      for (const question of this.questions) {
        if (question.selectedAnswer === question.correctAnswer) {
          this.score++;
        }
      }
    }

  
  
  ngOnInit() {
        
      //contenido
       
     }
    }

