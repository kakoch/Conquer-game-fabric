// script.js
document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById("game-container");
    const playerUnit = document.getElementById("player-unit");
    let buildMenu; // Declaração da variável buildMenu

    let playerX = 0; // Posição horizontal inicial da unidade
    let playerY = 0; // Posição vertical inicial da unidade
    const playerSpeed = 5; // Velocidade de movimento da unidade

    function initialize() {
        // Inicialize a posição inicial da unidade
        updateUnitPosition();

        // Adicione um event listener para capturar as teclas pressionadas
        document.addEventListener("keydown", handleKeyPress);

        // Event listener para mostrar o menu quando o usuário pressionar "i"
        document.addEventListener("keydown", function(event) {
            if (event.key === "i") {
                showBuildMenu();
            }
        });

        // Event listeners para construir torretas quando os botões do menu forem clicados
        document.getElementById("build-button-Turret1").addEventListener("click", function() {
            buildTurret('EU_Railgun_Turret');
            hideBuildMenu(); // Esconde o menu após a construção
        });
        document.getElementById("build-button-Turret2").addEventListener("click", function() {
            buildTurret('EU_Rocket_Turret');
            hideBuildMenu(); // Esconde o menu após a construção
        });
        document.getElementById("build-button-Turret3").addEventListener("click", function() {
            buildTurret('Falcon_MRLS_Render');
            hideBuildMenu(); // Esconde o menu após a construção
        });
        document.getElementById("build-button-Turret4").addEventListener("click", function() {
            buildTurret('Missile_Turret_Render');
            hideBuildMenu(); // Esconde o menu após a construção
        });

        // Adicione mais listeners para outras torretas, se necessário
    }

    // Função para atualizar a posição da unidade
    function updateUnitPosition() {
        playerUnit.style.left = playerX + "px";
        playerUnit.style.top = playerY + "px";
    }
    
    // Função para mostrar o menu de construção
    function showBuildMenu() {
        buildMenu = document.getElementById("build-menu"); // Atribui a buildMenu
        buildMenu.style.display = "block";
    }

    // Função para esconder o menu de construção
    function hideBuildMenu() {
        buildMenu.style.display = "none";
    }

    // Função para construir uma torreta na posição atual da unidade
    function buildTurret(turretType) {
        // Crie um elemento <div> para representar a torreta
        const turret = document.createElement("div");
        const imgTurret = document.createElement("img");
        imgTurret.src = "img/" + turretType + ".png";
        imgTurret.className="turretInstalled";
        // Defina uma classe CSS específica para a torreta para estilização
        turret.className = "turret"; // Adicione a classe da torreta
        turret.appendChild(imgTurret);
        // Posicione a torreta nas coordenadas atuais da unidade
        turret.style.left = playerX + "px";
        turret.style.top = playerY + "px";
    
        // Adicione a torreta ao jogo
        gameContainer.appendChild(turret);
    
        // Você pode adicionar lógica adicional para controlar a torreta, como mirar e disparar, aqui
    }

    // Função para lidar com as teclas pressionadas
    function handleKeyPress(event) {
        switch (event.key) {
            case "ArrowLeft":
                playerX -= playerSpeed;
                break;
            case "ArrowRight":
                playerX += playerSpeed;
                break;
            case "ArrowUp":
                playerY -= playerSpeed;
                break;
            case "ArrowDown":
                playerY += playerSpeed;
                break;
        }
        updateUnitPosition();
    }

    // Inicialize o jogo
    initialize();
});
