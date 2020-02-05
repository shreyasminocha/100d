function removeNilAxes(axes) {
    const axesArray = Object.entries(axes);

    return Object.fromEntries(
        axesArray.filter(([key, val]) => val !== '0')
    );
}

export default removeNilAxes;
