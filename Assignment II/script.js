document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");

  // Add desks and chairs in two rows
  const deskChairPositions = [
      { desk: "-2 0 -1", chair: "-2.2 0 -1.3" },
      { desk: "0 0 -1", chair: "0.2 0 -1.3" },
      { desk: "2 0 -1", chair: "2.2 0 -1.3" },
      { desk: "-2 0 -3", chair: "-2.2 0 -3.3" },
      { desk: "0 0 -3", chair: "0.2 0 -3.3" },
      { desk: "2 0 -3", chair: "2.2 0 -3.3" },
  ];

  deskChairPositions.forEach((pos) => {
      // Add desks
      const desk = document.createElement("a-entity");
      desk.setAttribute("gltf-model", "./models/table.glb");
      desk.setAttribute("position", pos.desk);
      desk.setAttribute("scale", "1 1 1");
      scene.appendChild(desk);

      // Add chairs
      const chair = document.createElement("a-entity");
      chair.setAttribute("gltf-model", "./models/chair.glb");
      chair.setAttribute("position", pos.chair);
      chair.setAttribute("scale", "1 1 1");
      scene.appendChild(chair);
  });

  // Add lighting
  const ambientLight = document.createElement("a-light");
  ambientLight.setAttribute("type", "ambient");
  ambientLight.setAttribute("color", "#ffffff");
  ambientLight.setAttribute("intensity", "0.5");
  scene.appendChild(ambientLight);

  const spotLight = document.createElement("a-light");
  spotLight.setAttribute("type", "spot");
  spotLight.setAttribute("position", "0 3 0");
  spotLight.setAttribute("intensity", "1");
  spotLight.setAttribute("angle", "45");
  scene.appendChild(spotLight);
});
