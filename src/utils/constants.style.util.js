export const elements = {
    water: "#5090D6",
    dragon: "#0B6DC3",
    electric: "#F4D23C",
    fairy: "#EC8FE6",
    ghost: "#5269AD",
    fire: "#FF9D55",
    ice: "#73CEC0",
    grass: "#63BC5A",
    bug: "#91C12F",
    fighting: "#CE416B",
    normal: "#919AA2",
    dark: "#5A5465",
    steel: "#5A8EA2",
    rock: "#C5B78C",
    psychic: "#FA7179",
    ground: "#D97845",
    posion: "#B567CE",
    flying: "#89AAE3",
}

export const secondary_elements = {
    water: "#EBF1F8",
    dragon: "#E4EEF6",
    electric: "#FBF8E9",
    fairy: "#FBF1FA",
    ghost: "#EBEDF4",
    fire: "#FCF3EB",
    ice: "#F1FBF9",
    grass: "#EDF6EC",
    bug: "#F1F6E8",
    fighting: "#F8E9EE",
    normal: "#F1F2F3",
    dark: "#ECEBED",
    steel: "#ECF1F3",
    rock: "#F7F5F1",
    psychic: "#FCEEEF",
    ground: "#F9EFEA",
    posion: "#F5EDF8",
    flying: "#F1F4FA",
}

export const cinzel_scale = {
    bold: "#000000",
    900: "#1A1A1A",
    800: "#333333",
    700: "#4D4D4D",
    600: "#666666",
    500: "#808080",
    400: "#999999",
    300: "#B3B3B3",
    200: "#CCCCCC",
    100: "#E6E6E6",
    50: "#F2F2F2",
    white: "#FFFFFF",
}

export const colours = {
    red: "#CD3131",
    blue: "#173EA5",
}

export const getElements = (name) => elements[name]
export const getSecondaryElements = (name) => secondary_elements[name]
export const getCinzelScale = (name) => cinzel_scale[name]
export const getColours = (name) => colours[name]