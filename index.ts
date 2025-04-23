import axios from "axios";

// Creamos el JSON con los componentes avanzados
const jsonData = {
	flags: 32768,
	components: [
		{
			type: 17, // el nuevo componente
			components: [
				{
					type: 12, // Componente para incrutar una imagen puedes usar url o file para incrustar un archivo
					items: [
						{
							media: {
								url: "url"
							}
						}
					]
				},
				{
					type: 10, // Componente de texto
					content:
						"## !Pako\nSoy desarollador de bots de discord, actualmente programo en ts aun que tengo conocimientos de varios lenguajes mas que puedes revisar en mi perfil de github.\n\nTe voy a enseñar a usar los nuevos componentes de discord aun que no estan de manera oficial puedes usar su api para probarlos."
				},
				{
					type: 14 // este es un salto de linea (esta muy guapo para separar los componentes)
				},
				{
					type: 10, // Componente de texto
					content: "-# Te dejo mas info aqui debajo:"
				},
				{
					type: 9, // Componente de botón
					components: [
						{
							type: 10, // No se mucho de cuales mas hay este te deja el texto en el lado derecho seguramente existan mas.
							content: "Discord developer portal (para crear el bot):"
						}
					],
					// Los accesorios son los botones que van acompañados del texto
					accessory: {
						type: 2, // Este es el tipo de botón
						style: 5, // Este es el estilo del boton, 5 es el de link y 1 es el normal
						label: "discord.dev",
						url: "url"
					}
				},
				{
					type: 9, // Componente de botón
					components: [
						{
							type: 10, // No se mucho de cuales mas hay este te deja el texto en el lado derecho seguramente existan mas.
							content: "Aqui te dejo mas info sobre los componentes:"
						}
					],
					accessory: {
						type: 2, // Este es el tipo de botón
						style: 5, // Este es el estilo del boton, 5 es el de link y 1 es el normal
						label: "Invitar",
						url: "url"
					}
				},
				{
					type: 9, // Componente de botón
					components: [
						{
							type: 10, // No se mucho de cuales mas hay este te deja el texto en el lado derecho seguramente existan mas.
							content: "Mi servidor de discord para cualquier pregunta o ayuda:"
						}
					],
					// Los accesorios son los botones que van acompañados del texto
					accessory: {
						type: 2,
						style: 5,
						label: "Mia Loung",
						url: "url"
					}
				}
			]
		}
	]
};

const token = "token"; // Cambia esto por tu token de bot
const canal = "id del canal"; // Cambia esto por el id del canal donde quieres enviar el mensaje

// Creamos el formData y añadimos el JSON como un archivo
const formData = new FormData();
formData.append("payload_json", JSON.stringify(jsonData));

await axios.post(`https://discord.com/api/v10/channels/${canal}/messages`, formData, {
	headers: {
		Authorization: `Bot ${token}`, // Cambia esto por tu token de bot
		"Content-Type": "multipart/form-data"
	}
});

/**
 * Para mas info puedes unirte a mi servidor en https://discord.gg/miabot.
 */
