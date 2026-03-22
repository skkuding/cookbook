+++
title = "WSL 설치 & Linux 듀얼 부팅 가이드"
description = "Windows에서 Linux를 사용하는 방법을 알아봅니다. WSL 설치 또는 듀얼 부팅을 선택할 수 있어요."
icon = "article"
weight = 401
+++

> 이 가이드는 공식 가이드를 참고해서 풀어 쓴 내용입니다.
> https://learn.microsoft.com/ko-kr/windows/wsl/install

> 개인적으로 아래의 Linux 듀얼 부팅도 같이 세팅해두었으면 좋겠습니다.  
> WSL2는 윈도우 업데이트에 따라 비교적 불안정한데다가 리눅스도 꽤 쓸만하다구요.

## 요구 사항

WSL을 사용하려면 Windows 10 버전 2004 이상 또는 Windows 11을 실행해야 합니다.

## 설치 방법

### 1. 관리자 모드에서 PowerShell 실행

시작 메뉴에서 `Windows PowerShell`을 검색하고, `관리자 권한으로 실행`을 클릭합니다.

### 2. WSL 사용 설정

아래 명령어를 입력하여 WSL 사용을 설정합니다.

```powershell
wsl --install
```

이후 컴퓨터를 다시 시작합니다.

### 3. Linux 배포판 설치

아래 명령어를 입력하여 사용 가능한 Linux 배포판을 확인합니다.

```powershell
wsl --list --online
```

다음 명령어로 Ubuntu를 설치합니다.

```powershell
wsl --install -d Ubuntu
```

이후 `wsl` 명령어를 입력하면 Linux을 사용할 수 있습니다.

## 같이 알면 좋을 것

### Windows Terminal

Windows Terminal은 Windows에서 여러 개의 터미널을 편리하게 사용할 수 있게 해주는 앱입니다. WSL을 사용할 때 함께 쓰는 것을 추천합니다. Microsoft Store에서 Windows Terminal을 검색하여 설치할 수 있습니다.

{{< figure src="https://store-images.s-microsoft.com/image/apps.28865.13926773940052066.16e93a5b-b25f-4aaf-8a38-77375e237879.78e2aeac-6ede-4855-acb1-79a854b5556d?h=1080" alt="Windows Terminal" >}}

### File System

WSL에서는 Windows의 파일 시스템에 접근할 수 있습니다. Windows의 파일 시스템은 `/mnt` 디렉토리에 마운트되어 있습니다. 예를 들어, `C:\Users\skku\Downloads` 디렉토리는 `/mnt/c/Users/skku/Downloads`에 위치합니다.

하지만 작업 파일 등 많이 쓰이는 파일은 WSL의 파일 시스템(예: `/home/skku`)에 저장하는 것을 추천합니다. WSL에서 윈도우 파일 시스템을 사용하면 대단히 느려, 작업을 할 때 훨씬 느려집니다.

---

## (대안) Linux 듀얼 부팅

WSL 대신 Windows와 Linux를 듀얼 부팅으로 설치하면 네이티브 Linux 환경을 사용할 수 있어요. Docker 성능이 더 좋고, 실제 서버 환경과 동일한 경험을 할 수 있습니다.

### 준비물

- **USB 드라이브** (8GB 이상)
- **Ubuntu 24.04 LTS ISO:** https://ubuntu.com/download/desktop 에서 다운로드
- **부팅 USB 생성 도구:** [Rufus](https://rufus.ie/) (Windows) 또는 [balenaEtcher](https://etcher.balena.io/)

### 설치 순서

1. **디스크 공간 확보:** Windows에서 `디스크 관리`를 열고, 기존 파티션을 축소하여 최소 50GB 이상의 빈 공간을 만드세요.
2. **부팅 USB 만들기:** Rufus 또는 balenaEtcher로 Ubuntu ISO를 USB에 구워요.
3. **BIOS/UEFI 진입:** 컴퓨터를 재부팅하고 BIOS 설정에 진입하세요 (보통 F2, F12, DEL 키).
   - **Secure Boot 비활성화** (일부 하드웨어에서 필요)
   - **Boot Order에서 USB를 첫 번째로** 설정
4. **USB로 부팅:** 저장 후 재부팅하면 Ubuntu 설치 화면이 나와요.
5. **"Install Ubuntu alongside Windows"** 옵션을 선택하면 듀얼 부팅으로 설치돼요.
6. 설치 완료 후 재부팅하면 **GRUB 부트로더**에서 Ubuntu와 Windows 중 선택할 수 있어요.

### 참고 자료

- **[Ubuntu 공식 듀얼 부팅 가이드](https://help.ubuntu.com/community/WindowsDualBoot)**: 공식 설치 문서입니다.
- **[How to Dual Boot Ubuntu and Windows](https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/)**: 스크린샷과 함께 자세히 설명합니다.

{{< alert context="warning" text="듀얼 부팅 설치 시 파티션 작업을 잘못하면 Windows 데이터가 날아갈 수 있어요. 반드시 중요한 데이터를 백업한 뒤 진행하세요!" />}}