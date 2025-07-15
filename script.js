const malla = {
  "1° semestre": [
    { nombre: "Introducción a la Sociología", id: "intro" },
    { nombre: "Sociedad Colombiana del Siglo XIX", id: "sigloxix" },
    { nombre: "Software Aplicado a las Ciencias Sociales", id: "software" },
    { nombre: "Estructura de la Sociedad Moderna I", id: "modernai" },
    { nombre: "Inglés I", id: "ingle1" }
  ],
  "2° semestre": [
    { nombre: "Análisis de Datos Cuantitativos", id: "datos" },
    { nombre: "Sociedad Colombiana del Siglo XX", id: "sigloxx" },
    { nombre: "Teoría Sociológica: Durkheim", id: "durkheim" },
    { nombre: "Estructura de la Sociedad Moderna II", id: "modernaii" },
    { nombre: "Inglés II", id: "ingle2" }
  ],
  "3° semestre": [
    { nombre: "Fisiología de Sistemas", id: "fisioSistemas", prerreq: ["fisioGeneral"] },
    { nombre: "Bases Integradas de Infectología, Inmunología y Farmacología General", id: "inmunofarma", prerreq: ["fisioGeneral", "neuroanato"] },
    { nombre: "Examen Kinésico Básico", id: "examenKinesico", prerreq: ["anato1", "anato2", "biomecanica"] },
    { nombre: "Control y Aprendizaje Motor", id: "controlMotor" },
    { nombre: "Fundamentos de la Investigación Científica", id: "fundamentosInvestigacion" },
    { nombre: "Educación Física 1", id: "educFisica1" }
  ],
  "4° semestre": [
    { nombre: "Fisiopatología y Farmacología de Sistemas", id: "fisiofarma", prerreq: ["inmunofarma", "fisioSistemas"] },
    { nombre: "Examen de la Condición Física y la Conducta Motora", id: "examenFisicaConducta", prerreq: ["examenKinesico"] },
    { nombre: "Procedimientos Terapéuticos Básicos y Generales", id: "procedimientos", prerreq: ["movimiento", "examenKinesico"] },
    { nombre: "Kinesiología del Desarrollo Psicomotor", id: "desarrolloPsicomotor", prerreq: ["controlMotor"] },
    { nombre: "Lectura Crítica de Artículos Científicos", id: "lecturaCritica", prerreq: ["lecturaComprensiva"] },
    { nombre: "Análisis Epidemiológico", id: "epidemiologia" },
    { nombre: "Análisis Bioinstrumental del Movimiento Humano", id: "bioinstrumental" }
  ],
  "5° semestre": [
    { nombre: "Efectos de la actividad Física en la salud", id: "efectosFisica", prerreq: ["examenFisicaConducta", "fisiofarma"] },
    { nombre: "Evaluación e Intervención en la Neurokinesiología 1", id: "neurokine1", prerreq: ["desarrolloPsicomotor"] },
    { nombre: "Evaluación e Intervención en Cuidados Respiratorios 1", id: "respiratorio1", prerreq: ["fisiofarma"] },
    { nombre: "Evaluación e Intervención en Musculoesquelético 1", id: "musculoesqueletico1", prerreq: ["procedimientos"] },
    { nombre: "Revisión Bibliográfica", id: "revisionBiblio", prerreq: ["lecturaCritica"] },
    { nombre: "Análisis del Modelo de Salud Chileno", id: "modeloSalud", prerreq: ["epidemiologia"] },
    { nombre: "Modulo Integrado Interdisciplinario y Multiprofesional 1", id: "modulo1" },
    { nombre: "Educación Física 2", id: "educFisica2", prerreq: ["educFisica1"] },
    { nombre: "Inglés 4", id: "ingles4" }
  ],
  "6° semestre": [
    { nombre: "Evaluación e Intervención en la Neurokinesiología 2", id: "neurokine2", prerreq: ["neurokine1"] },
    { nombre: "Evaluación e Intervención en Cuidados Respiratorios 2", id: "respiratorio2", prerreq: ["respiratorio1"] },
    { nombre: "Evaluación e Intervención en Musculoesquelético 2", id: "musculoesqueletico2", prerreq: ["musculoesqueletico1"] },
    { nombre: "Razonamiento Clínico", id: "razonamiento", prerreq: ["respiratorio1", "musculoesqueletico1", "neurokine1"] },
    { nombre: "Diseño y Formulación de Proyectos de Investigación", id: "disenoInvestigacion", prerreq: ["revisionBiblio"] },
    { nombre: "Responsabilidad del Ejercicio Profesional", id: "responsabilidad" },
    { nombre: "Actividad Física y Deportes", id: "actividadFisica", prerreq: ["educFisica2", "efectosFisica"] }
  ],
  "7° semestre": [
    { nombre: "Intervención Profesional en Contexto 1", id: "contexto1", prerreq: ["efectosFisica", "respiratorio2", "musculoesqueletico2", "neurokine2"] },
    { nombre: "Estrategias Deportivas y Recreativas", id: "estrategias", prerreq: ["actividadFisica"] },
    { nombre: "Análisis de la Relación Persona Entorno", id: "personaEntorno", prerreq: ["respiratorio2", "musculoesqueletico2", "neurokine2"] },
    { nombre: "Determinantes Sociales de la Salud", id: "determinantes", prerreq: ["modeloSalud"] },
    { nombre: "Ejecución de Proyectos de Investigación 1", id: "ejecucion1", prerreq: ["disenoInvestigacion"] },
    { nombre: "Conceptos Básicos de Administración en Salud", id: "adminSalud1" },
    { nombre: "Metodologías de Enseñanza Aprendizaje", id: "metodologias" }
  ],
  "8° semestre": [
    { nombre: "Intervención Profesional en Contexto 2", id: "contexto2", prerreq: ["efectosFisica", "respiratorio2", "musculoesqueletico2", "neurokine2"] },
    { nombre: "Estrategias Deportivas y Recreativas Aplicadas", id: "estrategiasAplicadas", prerreq: ["estrategias"] },
    { nombre: "Evaluación Ergonómica", id: "ergonomia", prerreq: ["personaEntorno"] },
    { nombre: "Programas de Promoción y Prevención en Salud", id: "promocion", prerreq: ["determinantes"] },
    { nombre: "Ejecución de Proyectos de Investigación 2", id: "ejecucion2", prerreq: ["ejecucion1"] },
    { nombre: "Proyectos de Emprendimientos", id: "emprendimientos", prerreq: ["adminSalud1"] },
    { nombre: "Aplicación Básica de Metodologías Docentes", id: "aplicacionMetodologias", prerreq: ["metodologias"] },
    { nombre: "Modulo Integrado Interdisciplinario y Multiprofesional 2", id: "modulo2", prerreq: ["modulo1"] }
  ],
  "5° año (anual)": [
    { nombre: "Intervención Profesional 1", id: "intervencion1", prerreq: ["contexto2"] },
    { nombre: "Intervención Profesional 2", id: "intervencion2", prerreq: ["intervencion1"] },
    { nombre: "Proyectos de Intervención Ergonómica", id: "proyectoErgo", prerreq: ["ergonomia"] },
    { nombre: "Intervención en Salud Comunitaria", id: "saludComunitaria", prerreq: ["promocion"] },
    { nombre: "Cursos de Profundización Disciplinar y Profesional", id: "profundizacion", prerreq: ["contexto1", "contexto2"] },
    { nombre: "Comunicación Científica", id: "comunicacion", prerreq: ["ejecucion2"] },
    { nombre: "Administración en Salud", id: "adminSalud2", prerreq: ["adminSalud1"] }
  ]
};

const estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  Object.entries(malla).forEach(([semestre, ramos]) => {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;

      const aprobado = estado[ramo.id];
      const prerreqCumplidos = (ramo.prerreq || []).every(id => estado[id]);

      if (aprobado) {
        div.classList.add("aprobado");
      } else if (!prerreqCumplidos && ramo.prerreq) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        estado[ramo.id] = !estado[ramo.id];
        guardarEstado();
        crearMalla();
      });

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });
}

crearMalla();
