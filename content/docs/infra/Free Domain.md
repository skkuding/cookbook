+++
title = "무료 도메인 등록"
description = "무료로 도메인을 등록하고 AWS 리소스에 연결하는 방법을 알아봅니다."
icon = "article"
weight = 403
+++

## 방법 1: .tech 도메인 (GitHub Student Developer Pack)

### 1. GitHub Student Developer Pack 등록

아래 링크에서 GitHub Student Developer Pack에 등록합니다.
https://education.github.com/pack

### 2. .TECH 도메인 등록

Pack 혜택 목록에서 .TECH를 찾아 GitHub 계정으로 연동하세요.
https://education.github.com/pack/offers

원하는 도메인 이름을 검색하고 무료로 등록합니다.

### 3. A 레코드 등록

.TECH 홈페이지(https://get.tech) > Account > 도메인 선택 > DNS Management에서 A 레코드를 추가합니다.

- Host Name: 비워두기 (루트 도메인)
- Destination: EC2의 Elastic IP
- Add Record

## 방법 2: nip.io & sslip.io (설정 필요 없음)

도메인 등록 없이 바로 사용할 수 있는 DNS 서비스예요. IP 주소를 도메인처럼 사용할 수 있습니다.

```
# IP가 54.180.123.45라면:
54.180.123.45.nip.io → 54.180.123.45로 해석됨
app.54.180.123.45.nip.io → 동일
```

별도의 설정이 필요 없어서 빠르게 테스트하기 좋아요. 다만 프로덕션에는 부적합합니다.

## 접속 시 주의사항

{{< alert context="warning" text="브라우저에 IP나 도메인을 입력하면 기본적으로 HTTPS 연결을 시도합니다. 이번 실습에서는 SSL 인증서를 설정하지 않으므로, 반드시 앞에 **http://** 를 붙여서 접속하세요!" />}}
