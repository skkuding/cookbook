+++
title = "Observability"
description = "모니터링 시스템의 데이터 '수집/처리'에 대해 알아봅니다."
icon = "article"
date = "2025-07-23"
lastmod = "2025-07-23"
weight = 391
+++

세션 목표: 애플리케이션과 인프라에서 발생하는 모든 텔레메트리 데이터(메트릭, 로그, 트레이스)를 수집하고, OTEL Collector를 통해 각각의 전문 저장소로 전달하는 파이프라인을 구축한다.

## 공부할 내용

### 1. OpenTelemetry(OTel)

OpenTelemetry는 텔레메트리 데이터 수집을 **표준화**하는 오픈 소스 프로젝트예요.

알아야 할 것:
- OpenTelemetry가 왜 등장했는지 (표준화 이전에는 뭐가 문제였나?)
- OTel의 주요 구성 요소: Collector, SDK, API

#### 참고 자료
- **[OpenTelemetry in 180 seconds](https://youtu.be/vnE_DfNB97w?si=Z7txE1RqcUgluh8X)**: OTel Collector의 개념과 필요성을 간단하게 설명하는 영상입니다.
- **[OpenTelemetry 공식 문서](https://opentelemetry.io/docs/what-is-opentelemetry/)**: 공식 개념 설명입니다.
- **[OpenTelemetry "Concepts"](https://opentelemetry.io/docs/concepts/)**: OTel의 핵심 개념(Signals, Context Propagation, SDK/API)을 정리한 공식 문서입니다.

### 2. 텔레메트리 데이터 소스

애플리케이션에서 생성되는 세 가지 텔레메트리 데이터의 차이를 이해하세요:

- **메트릭(Metrics):** 숫자로 된 측정값 (CPU 사용량, 요청 수, 응답 시간 등)
- **로그(Logs):** 이벤트 기록
- **트레이스(Traces):** 하나의 요청이 여러 서비스를 거치는 경로 추적

또한 수집 방법 두 가지를 이해하세요: 코드 변경 없이 수집하는 방법(Zero-code)과 코드에 직접 삽입하는 방법(Code-based).

#### 참고 자료
- **[Elastic "What is Telemetry Data?"](https://www.elastic.co/kr/what-is/telemetry-data/#types-of-telemetry-data)**: 텔레메트리 데이터의 종류와 수집 방법.
- **[OpenTelemetry "Instrumentation"](https://opentelemetry.io/docs/concepts/instrumentation/)**: 계측 방법 설명.

### 3. OTEL Collector

모든 텔레메트리 데이터의 중앙 허브예요.

알아야 할 것:
- Collector가 왜 필요한지 (앱에서 저장소로 직접 보내면 뭐가 문제인지)
- 아키텍처: **Receivers → Processors → Exporters** 파이프라인
- 데이터 종류에 따라 어떤 Receiver/Exporter를 사용하는지

#### 참고 자료
- **[OTel 공식 문서 "Collector를 사용해야 하는 이유"](https://opentelemetry.io/docs/collector/#when-to-use-a-collector)**: Collector의 필요성.
- **[OTel 공식 문서 "Collector 아키텍처"](https://opentelemetry.io/docs/collector/architecture/)**: 아키텍처와 구성 요소.
- **[OTLP Receiver](https://github.com/open-telemetry/opentelemetry-collector/tree/main/receiver/otlpreceiver#readme)**: 코드당에서도 사용하는 OTLP 리시버.

### 4. 역할별 전문 저장소

텔레메트리 데이터는 종류별로 전문 저장소에 저장돼요.

각 저장소에 대해 알아야 할 것:
- **Prometheus** (메트릭), **Loki** (로그), **Tempo** (트레이스) — 각각 어떤 데이터에 특화되어 있는지
- Collector에서 데이터를 가져가는 방식: Pull vs Push
- 대량의 데이터를 효율적으로 저장하고 검색하는 방법 (Indexing)
- 쌓인 데이터를 넘치지 않게 관리하는 방법 (Lifecycle Management)

#### 참고 자료
- **[Prometheus "Overview"](https://prometheus.io/docs/introduction/overview/)**: Prometheus의 아키텍처, 데이터 모델, Pull 기반 수집 방식을 설명하는 공식 문서입니다.
- **[Prometheus in 120 seconds](https://youtu.be/owcPJBvyU8Y?si=24aA88dyiJFRGNis)**: Prometheus의 개념과 작동 방식을 간단하게 설명하는 영상입니다.
- **[Grafana Loki "Overview"](https://grafana.com/docs/loki/latest/get-started/overview/)**: Loki의 레이블 기반 로그 수집 방식을 설명하는 공식 문서입니다.
- **[Grafana Tempo "Introduction"](https://grafana.com/docs/tempo/latest/introduction/)**: Tempo의 분산 트레이싱 백엔드와 OTel 통합을 설명하는 공식 문서입니다.

## 프로젝트 실습 (작성 중)

OTel SDK를 사용하여 애플리케이션에서 텔레메트리 데이터를 수집하고, OTEL Collector를 통해 전문 저장소로 전달하는 파이프라인을 구축해볼 거예요.

### 모니터링 대상 애플리케이션에 OTel SDK 코드 삽입

**요구사항:**
- `@opentelemetry/sdk-node` 패키지를 설치하고 설정하세요.
- `@opentelemetry/resources`와 `@opentelemetry/semantic-conventions`로 애플리케이션 정보를 설정하세요.
- (선택) `@opentelemetry/instrumentation`으로 자동 계측을 설정해보세요.

### Collector 및 백엔드 설정

Docker Compose로 각 서비스를 컨테이너로 실행하세요.

#### OTel Collector 설정

OTel Collector를 설정하여 SDK에서 보낸 텔레메트리 데이터를 수집하세요.

#### Loki 설정

이번 실습에서는 로그만 수집해볼 거예요. Loki를 설정하여 Collector에서 전달된 로그 데이터를 저장하세요.
