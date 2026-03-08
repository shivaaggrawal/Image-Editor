const filters = {
  Brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },

  Contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },

  Exposure: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },

  Saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },

  HueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg"
  },

  Blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px"
  },
  Grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },

  Sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },

  Opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%"
  },

  Invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
}

const imageCanvas = document.querySelector("#image-canvas")
const imageInput = document.querySelector("#image-input")
const canvasContext = imageCanvas.getContext("2d")

const filtersContainer = document.querySelector(".filters")

function createFilterElement(name, unit = "%", value, min, max){

  const div = document.createElement("div")
  div.classList.add("filter")

  const input = document.createElement("input")
  input.type = "range"
  input.min = min
  input.max = max
  input.value = value
  input.id = name

  const p = document.createElement("p")
  p.innerText = name

  div.appendChild(p)
  div.appendChild(input)

  return div
}

Object.keys(filters). forEach(key => {

const filterElement = createFilterElement(key, filters[ key ].unit, filters[ key ]. value, filters[ key ].min, filters[ key ].max)

filtersContainer.appendChild(filterElement)

})

imageInput.addEventListener("change", (event) => {

console.log("File input changed", event.target.files)
  const file = event.target. files[ 0 ]

const img = new Image()
img.src = URL.createObjectURL(file)

img. onload = () => {
canvasCtx.drawImage(img, 0, 0)
}
})