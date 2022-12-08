const handlerSpanish = (required, response) => {
  response.status(200).json({
    title: "Enmienda de Compañía",
    steps: {
      step1: {
        title: "Información de la Companía",
        description: "Información general de la Companía....",
        labels: {
          label1: "Nombre de la Compañía",
          label2: "TAX ID",
          label3: "Teléfono",
          label4: "Correo",
          label5: "Número de Documento",
          label6: "Tipo de Organización",
          label7: "Nuevo Nombre de Compañía",
          label8: "Dirección Principal",
          label9: "Ciudad",
          label10: "Estado",
          label11: "Código Zip",
          label12: "Dirección #2",
        },
        options: {
          label6: [
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
        },
      },
      step2: {
        title: "Cambio de Oficiales",
        description: "Actualización de la Información de los Oficiales ....",
        labels: {
          label1: "Nombre Completo",
          label2: "Cargo",
          label3: "Acción",
          label4: "Firma",
        },
        options: {
          label2: [
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
          label3: ["Añadir", "Quitar"],
        },
      },
      step3: {
        title: "Nuevo Agente Registrador",
        description: "Actualizar Información del Agente Registrador ....",
        labels: {
          label1: "Nombre Completo",
          label2: "Dirección",
        },
      },
      step4: {
        title: "Autorización",
        description: "Información de la persona que autoriza los cambios ....",
        labels: {
          label1: "Nombre Completo",
          lable2: "Firma de Autorización",
          label3: "Cargo",
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
      button1: "Volver",
      button2: "Continuar",
      button3: "Enviar",
    },
  });
};

export default handlerSpanish;
