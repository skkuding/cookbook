resource "aws_route53_record" "this" {
  zone_id = data.aws_route53_zone.skkuding.zone_id
  name    = "study.skkuding.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }
}
