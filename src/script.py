import os

extensions = ('.avif', '.jpg', '.jpeg', '.png', '.webp')

def generateImportStatements (folderPath, fObj, startIndex, folderName, arrayName):
    images = os.listdir(folderPath)
    num = startIndex
    for i, imageName in enumerate(images):
        if imageName.lower().endswith(extensions):
            fObj.write("import img")
            fObj.write(str(num))
            fObj.write(f" from './assets/{folderName}/")
            fObj.write(imageName)
            fObj.write("';\n")
            num = num + 1
    fObj.write(f"const {arrayName} = [")
    for i in range (startIndex, num):
        fObj.write(f"img{str(i)}")
        if (i < num - 1):
            fObj.write(", ")
    fObj.write("];\n\n")
    return num

with open("import-statements.js", "w") as f:
    nextStart = generateImportStatements('./assets/concerts-reduced', f, 0, "concerts-reduced", "concertImages")
    nextStart = generateImportStatements('./assets/trips-reduced', f, nextStart, "trips-reduced", "tripImages")
    nextStart = generateImportStatements('./assets/other-reduced', f, nextStart, "other-reduced", "otherImages")