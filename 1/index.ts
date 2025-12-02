import { log } from "../utils/config";

const { abs, floor } = Math;

export const findPassword = (
  start: number,
  rotations: string,
): {
  zerosLanded: number;
  zerosClicked: number;
} => {
  const rotationsList = rotations.split("\n");
  let location = start;
  let zerosLanded = 0;
  let zerosClicked = 0;

  log(`The dial starts by pointing at ${location}.`);
  log(location);

  for (let rotation of rotationsList) {
    let zeroClicksThisRotation = 0;
    let rotationValue = parseInt(rotation.replace("L", "-").replace("R", ""));
    const turningLeft = rotationValue < 0;

    if (abs(rotationValue) > 100) {
      zeroClicksThisRotation += floor(abs(rotationValue) / 100);
    }

    rotationValue %= 100;

    if (location !== 0) {
      if (
        (turningLeft && rotationValue + location < 0) ||
        (!turningLeft && rotationValue + location > 100)
      ) {
        zeroClicksThisRotation++;
      }
    }

    location = (location + rotationValue) % 100;
    if (location < 0) {
      location = location + 100;
    }

    // log(
    //   `The dial is rotated ${rotation} to point at ${location}${zeroClicksThisRotation > 0 ? "; during this rotation, it points at 0 " + (zeroClicksThisRotation === 1 ? "once" : "zeroClicksThisRotation times") : ""}`,
    // );

    zerosClicked += zeroClicksThisRotation;

    if (location === 0) {
      zerosLanded++;
      zerosClicked++;
    }
  }

  return { zerosLanded, zerosClicked };
};
