// Interface para a implementação da renderização
interface Renderizador {
    renderizarForma(nomeDaForma: string): void;
}

// Implementação concreta de renderização 2D
class Renderizador2D implements Renderizador {
    renderizarForma(nomeDaForma: string): void {
        console.log(`Renderizando ${nomeDaForma} em 2D.`);
    }
}

// Implementação concreta de renderização 3D
class Renderizador3D implements Renderizador {
    renderizarForma(nomeDaForma: string): void {
        console.log(`Renderizando ${nomeDaForma} em 3D.`);
    }
}

// Abstração de uma forma geométrica
abstract class Forma {
    protected renderizador: Renderizador;

    constructor(renderizador: Renderizador) {
        this.renderizador = renderizador;
    }

    abstract desenhar(): void;
}

// Implementação concreta de um Círculo
class Circulo extends Forma {
    private raio: number;

    constructor(renderizador: Renderizador, raio: number) {
        super(renderizador);
        this.raio = raio;
    }

    desenhar(): void {
        this.renderizador.renderizarForma(`Círculo com raio ${this.raio}`);
    }
}

// Implementação concreta de um Quadrado
class Quadrado extends Forma {
    private lado: number;

    constructor(renderizador: Renderizador, lado: number) {
        super(renderizador);
        this.lado = lado;
    }

    desenhar(): void {
        this.renderizador.renderizarForma(`Quadrado com lado ${this.lado}`);
    }
}

// Função principal para testar o sistema
function main() {
    // Renderizando formas com diferentes renderizadores
    const renderizador2D: Renderizador = new Renderizador2D();
    const renderizador3D: Renderizador = new Renderizador3D();

    const circulo2D: Forma = new Circulo(renderizador2D, 5.0);
    const quadrado3D: Forma = new Quadrado(renderizador3D, 4.0);

    circulo2D.desenhar();  
    quadrado3D.desenhar(); 
}

main();
