

export const fetchLocalFile = async (filePath) => {
  let file = filePath
  await file.downloadAsync()
  file = await fetch(file.uri)
  return await file.text()
}
