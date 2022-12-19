const handlerSpanish = (required, response) => {
  response.status(200).json({
    title: "Creación de Compañía",
    steps: {
      step1: {
        title: "Información Personal",
        description:
          "Esta sección debe ser completada con su información personal. ¡ IMPORTANTE ! Todos los campos deben ser llenados para poder continuar con el siguiente paso.",
        labels: {
          label1: "Nombre Completo",
          label2: "Correo Electrónico",
          label3: "Número de Contacto",
          label4: "Dirección Principal",
          label5: "Dirección de Correo",
          label6: "Código Postal",
          label7: "Estado",
          label8: "Ciudad",
        },
      },
      step2: {
        title: "Nombre de la Compañía",
        description: "Nombre de la Compañía extra",
        labels: {
          label1: "Nombre de la Compañía",
          label2: "Tipo de Organización",
          label3: "Tipo de Formulario",
        },
        options: {
          label2: [
            "Seleccione uno",
            "Corporación (C - CORP)",
            "Corporación (S - CORP)",
            "Corporación (Asociación)",
            "Corporación (Miembro Único)",
            "Compañía de responsabilidad limitada",
            "Compañía de responsabilidad limitada (C - CORP)",
            "Compañía de responsabilidad limitada (S - CORP)",
            "Otro (TBD)",
          ],
          label3: ["Formulario 8832", "Formulario 2553"],
        },
      },
      step3: {
        title: "Información de Oficiales",
        description: "Información de Oficiales extra",
        labels: {
          label1: "Nombre Completo",
          label2: "Correo Electrónico",
          label3: "Número de Contacto",
          label4: "Dirección",
          label5: "Posición",
        },
        options: {
          label5: [
            "Seleccione uno",
            "Presidente",
            "Vice-Presidente",
            "Secretario(a)",
            "Director(a)",
            "Administrador(LLC)",
            "Miembro Designado (AMBR)",
            "Miembro (MBR)",
            "Accionista",
          ],
        },
      },
      step4: {
        title: "Agente Registrador",
        description: "Agente Registrador extra",
        labels: {
          label1: "Nombre Completo",
          label2: "Dirección",
          label3: "Firma",
          label4: "# Documento",
        },
      },
      step5: {
        title: "Aplicante al Número TAX ID",
        description: "Aplicante al Número TAX ID extra",
        labels: {
          label1: "Nombre Completo",
          label2: "SSN / ITIN",
        },
      },
      step6: {
        title: "Naturaleza de la Compañía",
        description: "Naturaleza de la Compañía extra",
        labels: {
          label1: "Actividad de la Compañía",
          label2: "Firma",
          label3: "Posición",
        },
        options: {
          label3: [
            "Seleccione uno",
            "Presidente",
            "Vice-Presidente",
            "Secretario(a)",
            "Director(a)",
            "Administrador(LLC)",
            "Miembro Designado (AMBR)",
            "Miembro (MBR)",
            "Accionista",
          ],
        },
      },
    },
    buttons: {
      continue: "Siguiente",
      back: "Atrás",
      send: "Enviar",
      download: "Download",
    },
  });
};
export default handlerSpanish;
