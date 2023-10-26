let formType = 'login'

const load = async () => {
  try {
    const data = await fetch('/api/os').then((res) => res.json())
    document.querySelector('.type').innerText = data.type
    document.querySelector('.hostname').innerText = data.hostname
    document.querySelector('.cpu-num').innerText = data.cpu_num
    document.querySelector('.total-mem').innerText = data.total_mem
  } catch (error) {
    console.error(error)
    alert('⚠️ 서버에서 데이터를 가져올 수 없어요!\n' + error.message)
  }
}

const login = async (e) => {
  e.preventDefault()
  const username = e.target.username.value
  const password = e.target.password.value
  if (!username || !password) {
    alert('⚠️ 아이디와 비밀번호를 입력해주세요!')
    return
  }
  try {
    const data = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    if (data.status !== 200) {
      alert('⚠️ 로그인에 실패했어요!')
      return
    }
    document.querySelector('.login').classList.add('hide')
    await load()
  } catch (error) {
    console.error(error)
    alert('⚠️ 서버에서 데이터를 가져올 수 없어요!\n' + error.message)
  }
}

const signup = async (e) => {
  e.preventDefault()
  const username = e.target.username.value
  const password = e.target.password.value
  const email = e.target.email.value
  if (!username || !password) {
    alert('⚠️ 아이디와 비밀번호를 입력해주세요!')
    return
  }
  if (!email) {
    alert('⚠️ 이메일을 입력해주세요!')
    return
  }
  try {
    const data = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email })
    })
    if (data.status !== 201) {
      alert('⚠️ 회원가입에 실패했어요!')
      return
    }
    alert('✅ 회원가입에 성공했어요!')
  } catch (error) {
    console.error(error)
    alert('⚠️ 서버에서 데이터를 가져올 수 없어요!\n' + error.message)
  }
}

const toggle = () => {
  formType = formType === 'login' ? 'signup' : 'login'
  document.querySelector('button').innerText =
    formType === 'login' ? '로그인' : '회원가입'
  document.querySelector('a').innerText =
    formType === 'login' ? '회원가입 하기' : '로그인 하기'
  document.querySelector('input[name="email"]').type =
    formType === 'login' ? 'hidden' : 'email'
}
