class card extends HTMLElement {
    constructor() {
        super();

        this.build()
    }

    build() {        
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.style())
        shadow.appendChild(this.createCard())
    }

    //método para estilizar a div
    style() {
        const style = document.createElement('style')
        style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@500&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            
        }
        
        .card {
            width: ${this.size()}px;
            height: ${this.size()}px;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        
            box-shadow: 2px 2px 10px 0px;
            border-radius: 10px;
            background-color: ${this.bgcolor()};
        
            user-select: none;
        }
        
        .card-text {
            width: 50%;
        
            font-family: 'Rokkitt';
            font-size: 1rem;
            text-align: center;
            text-transform: uppercase;
        
            border-radius: 5px;
            box-shadow: 0 0 2px #000;
        }
        
        .card-image {
            width: 50%;
            height: 50%;
        
            border-radius: 40%;
            box-shadow: inset 0 0 10px #000;
            background-image: url('${this.studentimg()}');
            background-size: contain;
        }
        `

        return style
        
    }

    //método para criar uma div
    createCard() {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text">${this.name()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.team()}</div>
        `
        
        return card
    }

    size() {
        const size = this.getAttribute('data-size') ?? '250'

        return size
    }

    bgcolor() {
        const color = this.getAttribute('data-bgcolor') ?? '#4682b4' 

        return color
    }

    name() {
        const name = this.getAttribute('data-name') ?? 'Nome do aluno'

        return name
    }

    studentimg() {
        const studentimg = this.getAttribute('data-image') ?? './img/avatar.png'

        return studentimg
    }

    team() {
        const team = this.getAttribute('data-team') ?? 'Turma'

        return team
    }

}

//para inserir no html, dos quais os parâmetros são: o nome da tag e a classe
customElements.define('card-aluno', card)