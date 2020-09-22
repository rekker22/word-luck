import React from 'react';
import Particles from 'react-particles-js';
import './ParticleEffect.css';

const particleEffectOptions = {
    "particles": {
        "number": {
          "value": 120,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  }
}

const ParticleEffect = () => {
    return (
        <Particles className="particles" params={particleEffectOptions} />
    );

}

export default ParticleEffect;