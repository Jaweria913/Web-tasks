const softwareHouses = ["TechSoft", "CodeLab", "DevHouse", "InnovateX"];
softwareHouses.shift(); // Remove first
softwareHouses.splice(1, 1, "NewTech"); // Remove middle & add new
softwareHouses.push("SoftVision"); // Add new at end
console.log(softwareHouses);
