+++
title = "Observability (1)"
description = "모니터링 시스템의 데이터 '수집/처리'에 대해 알아봅니다."
icon = "article"
date = "2025-07-23"
lastmod = "2025-07-23"
weight = 391
+++

📖 세션 목표: 애플리케이션과 인프라에서 발생하는 모든 텔레메트리 데이터(메트릭, 로그, 트레이스)를 수집하고, OTEL Collector를 통해 각각의 전문 저장소로 전달하는 파이프라인을 구축한다.

## 공부할 내용 📚

### 1. OpenTelemetry(OTel)

OpenTelemetry는 애플리케이션과 인프라에서 발생하는 텔레메트리 데이터 데이터를 수집하고 처리하는 오픈 소스 프로젝트입니다. OTel은 다양한 언어와 플랫폼을 지원하며, 데이터 수집을 **표준화**하여 모니터링과 관측 가능성을 향상시킵니다.

- **OpenTelemetry란?**: OpenTelemetry의 개념과 등장 배경을 이해합니다.
- **OTel의 구성 요소**: OTel의 주요 구성 요소(Collector, SDK, API 등)를 이해합니다.

#### 참고 자료
- **[OpenTelemetry in 180 seconds](https://youtu.be/vnE_DfNB97w?si=Z7txE1RqcUgluh8X)**: OpenTelemetry부터 OTel Collector의 개념과 필요성을 간단하게 설명하는 영상입니다.
- **[OpenTelemetry 공식 문서](https://opentelemetry.io/docs/what-is-opentelemetry/)**: OpenTelemetry의 개념에 대한 공식 문서입니다.
- **[OpenTelemetry란 무엇인가?](https://medium.com/@dudwls96/opentelemetry-란-무엇인가-18b6e4fe6e36)**: OpenTelemetry의 개념과 필요성, 나아가 아키텍처 및 구성 요소에 대한 설명입니다.

### 2. 텔레메트리 데이터 소스 심층 탐구

애플리케이션에서는 메트릭, 로그, 트레이스 등 다양한 텔레메트리 데이터를 생성합니다. 이 데이터들은 시스템의 상태를 모니터링하고, 문제를 해결하는 데 중요한 역할을 합니다.

- **데이터 종류**: 각 텔레메트리 데이터의 종류(메트릭, 로그, 트레이스)와 그 역할을 이해합니다.
- **수집 방법**: 코드 변경 없이 수집하는 방법(Zero-code solutions)과 코드 변경을 통해 수집하는 방법(Code-based solutions)을 이해합니다.

#### 참고 자료
- **[Elastic "What is Telemetry Data?"](https://www.elastic.co/kr/what-is/telemetry-data/#types-of-telemetry-data)**: 텔레메트리 데이터의 종류와 수집 방법에 대한 설명입니다.
- **[OpenTelemetry "Instrumentation"](https://opentelemetry.io/docs/concepts/instrumentation/)**: OpenTelemetry에서의 계측 방법에 대한 설명입니다.

### 3. 중앙 허브, OTEL Collector

모든 텔레메트리 데이터의 중앙 허브 역할을 하는 OTEL Collector에 대해 알아봅니다.

- OTEL Collector의 역할과 필요성을 알아봐요.
- OTEL Collector의 아키텍처를 알아봐요. (Receivers, Processors, Exporters)
- 텔레메트리 데이터의 종류에 따라 사용되는 리시버(Receiver)와 익스포터(Exporter)를 알아봐요. 

#### 참고 자료
- **[OTel 공식 문서 "Collector를 사용해야 하는 이유"](https://opentelemetry.io/docs/collector/#when-to-use-a-collector)**: Collector를 통한 중앙화, 데이터 처리의 필요성을 설명합니다.
- **[OTel 공식 문서 "Collector 아키텍처"](https://opentelemetry.io/docs/collector/architecture/)**: OTEL Collector의 아키텍처와 구성 요소에 대한 설명입니다.
- **[OTLP Receiver](https://github.com/open-telemetry/opentelemetry-collector/tree/main/receiver/otlpreceiver#readme)**: 코드당에서도 사용하는 OTLP 형식의 텔레메트리 데이터를 처리하는 리시버입니다.

### 4. 역할별 전문 저장소(백엔드) 소개

텔레메트리 데이터는 종류별로 전문 저장소에 저장됩니다. 각 데이터 유형에 맞는 저장소를 알아봅시다.

- 텔레메트리 데이터의 종류 별로 어떤 저장소가 사용되는지 알아봐요. 
  - 메트릭: Prometheus
  - 로그: Loki
  - 트레이스: Tempo
- 각 전문 저장소는 Collector에서 어떤 방식으로 데이터를 수집하는지 알아봐요. (Pull, Push 방식)
- 각 전문 저장소가 수 많은 데이터를 어떻게 효율적으로 저장하고 검색하는지 알아봐요. (Indexing)
- 각 전문 저장소가 쌓인 데이터를 넘치지 않게 관리하는 방법을 알아봐요. (Lifecycle Management)

#### 참고 자료
설치 및 실습 부분에서 쿠버네티스 관련 내용이 많이 나오는데, 간단히 참고만 해주세요.
- [\[Prometheus\] 란?](https://wlsdn3004.tistory.com/35)
- **[Prometheus in 120 seconds](https://youtu.be/owcPJBvyU8Y?si=24aA88dyiJFRGNis)**: Prometheus의 개념과 작동 방식을 간단하게 설명하는 영상입니다.
- [\[Grafana Loki\]란? 개념부터 설치까지](https://wlsdn3004.tistory.com/48)
- [\[Grafana Tempo\]란? 개념부터 설치까지](https://wlsdn3004.tistory.com/49)

## 프로젝트 실습 🎈(작성 중)
OTel SDK를 사용하여 애플리케이션에서 텔레메트리 데이터를 수집하고, OTEL Collector를 통해 전문 저장소로 전달하는 파이프라인을 구축해볼 거예요.

### 모니터링 대상 어플리케이션에 OTel SDK 코드 삽입

어플리케이션 코드에 OTel SDK를 삽입하여 텔레메트리 데이터를 수집합니다. 예를 들어, Node.js 애플리케이션에서는 `@opentelemetry/sdk-node` 패키지를 사용하여 메트릭, 로그, 트레이스를 수집할 수 있습니다.

- 핵심 패키지인 [@opentelemetry/sdk-node](https://www.npmjs.com/package/@opentelemetry/sdk-node)를 설치합니다.
- [@opentelemetry/resources](https://www.npmjs.com/package/@opentelemetry/resources)를 활용하여 모니터링 대상 어플리케이션에 대한 정보를 설정합니다.
- 이 때 [@opentelemetry/semantic-conventions](https://www.npmjs.com/package/@opentelemetry/semantic-conventions)를 사용하여 표준화된 속성을 사용합니다.
- (선택 사항) [@opentelemetry/instrumentation](https://www.npmjs.com/package/@opentelemetry/instrumentation) 패키지를 사용하여 자동 계측을 설정합니다.

### Collector 및 백엔드 설정

OTel Collector와 여러 저장소 처럼 많은 서비스들을 설정해야 하기 때문에 이전에 배운 Docker Compose를 사용하여 각 서비스를 컨테이너로 실행합니다.


#### OTel Collector 설정

OTel Collector를 설정하여 OTel SDK에서 보낸 텔레메트리 데이터를 수집합니다.

#### Loki, Prometheus, Tempo 설정

로그, 메트릭, 트레이스 데이터 모두를 수집하는 것은 양이 방대하기 때문에 이번 실습에서는 로그만 수집해볼거에요.
