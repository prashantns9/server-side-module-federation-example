export default function businessInfoMiddleware(req, res, next) {
  res.send({ businessInfo: true });
}