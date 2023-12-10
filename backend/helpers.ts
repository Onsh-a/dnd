export const throwError = (error:any, res:any) => {
  res.status(400).json({
    success: false,
    message: `Ошибка ${error}`,
  })
}
