const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D globeTexture;
  void main() {
    vec4 color = texture2D(globeTexture, vUv);
    gl_FragColor = color;
  }
`;
export default fragmentShader;
