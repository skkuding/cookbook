# Docker 설치 가이드

## Windows 🪟

### 1. WSL 설치

WSL이 설치되지 않았다면, [WSL 설치 가이드](./Install%20WSL.md)를 참고해서 설치해주세요.

### 2. Docker Desktop 설치

아래 링크에서 Docker Desktop for Windows를 다운로드하여 설치합니다. (파란 버튼 클릭!)  
https://docs.docker.com/desktop/install/windows-install/

> [!WARNING]  
> 설치 시 Hyper-V 대신 WSL 2를 사용하도록 설정해야 합니다!

이후 Docker Desktop 앱을 실행해주세요.

## Mac OS 🍎

### 1. Docker Desktop 설치

아래 링크에서 Docker Desktop for Mac을 다운로드하여 설치합니다. (파란 버튼 클릭!)  
https://docs.docker.com/desktop/install/mac-install/

이후 Docker Desktop 앱을 실행해주세요.

## Linux (Ubuntu) 🐧

> Ubuntu 외의 배포판은 공식 문서를 참고해주세요: https://docs.docker.com/engine/install/  
> 아래 설명은 공식 문서를 참고하여 작성되었습니다.

### 1. 설치 script 실행

아래 명령어를 입력하여 설치 script를 실행합니다.

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### 2. sudo 권한 없이 Docker 사용하기

아래 명령어를 입력하여 현재 사용자를 `docker` 그룹에 추가합니다.

```bash
sudo usermod -aG docker $USER
```

이후 로그아웃 후 다시 로그인하면 `sudo` 없이 Docker를 사용할 수 있습니다.  
또는 아래 명령어를 입력하여 현재 쉘에서 바로 적용할 수 있습니다.

```bash
newgrp docker
```
