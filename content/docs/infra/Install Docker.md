+++
title = "Docker 설치 가이드"
description = "Docker를 설치하고 사용하는 방법을 알아봅니다."
icon = "article"
weight = 402
+++

Docker는 컨테이너를 쉽게 쓰도록 도와주는 도구입니다.
원하는 운영체제의 가이드에 따라 설치해주세요!

{{< tabs tabTotal="3">}}
{{% tab tabName="Windows" %}}

### 1. WSL 설치

WSL이 설치되지 않았다면, [WSL 설치 가이드](./Install%20WSL.md)를 참고해서 설치해주세요.

### 2. Docker Desktop 설치

아래 링크에서 Docker Desktop for Windows를 다운로드하여 설치합니다.
https://docs.docker.com/desktop/install/windows-install/

{{< alert context="warning" text="설치 시 Hyper-V 대신 WSL 2를 사용하도록 설정해야 합니다!" />}}

이후 Docker Desktop 앱을 실행해주세요.

### 3. CLI 확인

WSL에서 아래 명령어를 입력하여 Docker CLI가 정상적으로 설치되었는지 확인합니다.

```bash
docker --version
```

{{% /tab %}}
{{% tab tabName="MacOS" %}}

### 1. Docker Desktop 설치

아래 링크에서 Docker Desktop for Mac을 다운로드하여 설치합니다.
https://docs.docker.com/desktop/install/mac-install/

이후 Docker Desktop 앱을 실행해주세요.

### 2. CLI 확인

```bash
docker --version
```

{{% /tab %}}
{{% tab tabName="Linux" %}}

### 1. 설치 script 실행

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 2. sudo 권한 없이 Docker 사용하기

```bash
sudo usermod -aG docker $USER
```

이후 로그아웃 후 다시 로그인하면 `sudo` 없이 Docker를 사용할 수 있습니다.

{{% /tab %}}
{{< /tabs >}}
