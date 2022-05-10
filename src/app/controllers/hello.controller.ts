export const helloController = async (req: any, res: any) => {
  const { name } = req.body;

  res.json({
    message: `Hi, ${name}, Welcome`,
    error: false,
  });
};
