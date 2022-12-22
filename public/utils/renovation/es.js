const es = {
  title: "Company Amendment",
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
        label7: "Nueva Dirección",
        label8: "Ciudad",
        label9: "Estado",
        label10: "Código Zip",
        label11: "Dirección de Referencia",
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
      title: "Actualización de Oficiales",
      description: "Actualización de la Información de los Oficiales ....",
      labels: {
        label1: "Nombre Completo",
        label2: "Teléfono",
        label3: "Cargo",
        label4: "Acción",
        label5: "Firma",
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
        label4: ["Seleccione Uno", "Añadir", "Quitar"],
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
        lable2: "Cargo",
        label3: "Firma de Autorización",
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
      },
    },
  },
  buttons: {
    continue: "Siguiente",
    back: "Volver",
    send: "Enviar",
    download: "Descargar",
  },
};

export default es;