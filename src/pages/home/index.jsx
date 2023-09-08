import { useEffect, useRef, useState } from "react";
import {
  Container,
  Swapper,
  Header,
  DivHello,
  DivGoal,
  DivDrink,
  Drink,
  DivGoalDiary,
  DailyGoal,
  Daily,
  QuantifyTimer,
  Quantify,
  DivImage,
  DivTimer,
  DivHour,
  Second,
  DivMin,
  Min,
  Button,
} from "./styles";

import { motion } from "framer-motion";

import { IoCloseOutline } from "react-icons/io5";
import { RxChevronRight } from "react-icons/rx";
import mini_emoji from "../../assets/mini_emoji.svg";

import Lottie from "lottie-react";
import animation from "../../assets/animation.json";

import avatar from "../../assets/img-avatar.png";
import emoji from "../../assets/emoji.png";

function Home(props) {
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

  const [dailyGoal, setDailyGoal] = useState(2500);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(200);

  const [percentage, setPercentage] = useState(0);

  const [githubUsername, setGithubUsername] = useState("");
  const [isGitHubUsernameModalOpen, setIsGitHubUsernameModalOpen] = useState(true);
  const usernameInputRef = useRef(null);

  const [greet, setGreet] = useState("");

  useEffect(() => {
    const getHoraAtual = () => {
      const horaAtual = new Date();
      const horaAtualEmHoras = horaAtual.getHours();

      if (horaAtualEmHoras >= 5 && horaAtualEmHoras < 12) {
        setGreet("Bom dia");
      } else if (horaAtualEmHoras >= 12 && horaAtualEmHoras < 18) {
        setGreet("Boa tarde");
      } else {
        setGreet("Boa noite");
      }
    };
    getHoraAtual();
  }, []);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          setIsGitHubUsernameModalOpen(false);
        } else {
          console.error("Usuário do GitHub não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleModalConfirm();
      }
    };

    const handleModalConfirm = () => {
      fetchGitHubProfile();
      closeGitHubUsernameModal();
    };

    if (isGitHubUsernameModalOpen) {
      const inputRef = usernameInputRef.current;
      if (inputRef) {
        inputRef.addEventListener("keydown", handleKeyPress);
      }
    }

    return () => {
      if (isGitHubUsernameModalOpen) {
        const inputRef = usernameInputRef.current;
        if (inputRef) {
          inputRef.removeEventListener("keydown", handleKeyPress);
        }
      }
    };
  }, [isGitHubUsernameModalOpen, githubUsername]);

  const closeGitHubUsernameModal = () => {
    setIsGitHubUsernameModalOpen(false);
  };

  const startTimer = () => {
    setMinutes(1);
    setSeconds(0);
    setIsRunning(true);
  };

  const increaseAmount = () => {
    const newAmount = currentAmount + amountToAdd;
    const newPercentage = (newAmount / dailyGoal) * 100;

    if (newPercentage >= 100) {
      showNotification("Parabéns! Meta diária batida com sucesso!");
    }
    setCurrentAmount(newAmount);
    setPercentage(newPercentage);
    closeModal();
  };

  const showNotification = (message) => {
    alert(message);
  };

  useEffect(() => {
    if (dailyGoal < amountToAdd) {
      setDailyGoal(amountToAdd);
    }
    const newPercentage = (currentAmount / dailyGoal) * 100;
    setPercentage(newPercentage);
  }, [dailyGoal, amountToAdd, currentAmount]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          setIsRunning(false);
          openModal();
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds, minutes]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/hello`);
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
      }
    };
    fetchGitHubProfile();
  }, [props.username]);

  return (
    <Container>
      <Swapper
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header>
          {profileData && (
            <DivImage>
              <img
                src={profileData.avatar_url || avatar}
                alt="Imagem de perfil do GitHub"
              />
            </DivImage>
          )}
          <DivHello>
            <span>{greet},</span>
            <div>
              <h1>
                {profileData &&
                  profileData.name &&
                  profileData.name.split(" ")[0]}{" "}
              </h1>
              <Lottie
                animationData={animation}
                style={{
                  width: "30px",
                  height: "30px",
                  transform: "rotate(-30deg)",
                }}
              />
            </div>
          </DivHello>
        </Header>

        <DivGoal>
          <DivDrink>
            <span>{percentage.toFixed(2)}%</span>

            <Drink>
              <img  src={emoji} alt="" />
              <div>
                <h1>Beber água</h1>
                <span>Meta: {dailyGoal}L</span>
              </div>
            </Drink>
          </DivDrink>

          <DivGoalDiary>
            <DailyGoal>
              <Daily>
                <span>Meta diária</span>
                <p>{dailyGoal}ml</p>
              </Daily>
              <input
                className="range-slider"
                type="range"
                min="0"
                max="3000"
                step={5}
                value={dailyGoal}
                onChange={(e) => {
                  setDailyGoal(Number(e.target.value));
                }}
              />
            </DailyGoal>

            <QuantifyTimer>
              <Quantify>
                <span>Quantidade por Timer</span>
                <p>{amountToAdd}ml</p>
              </Quantify>
              <input
                type="range"
                min="0"
                max="300"
                step={5}
                value={amountToAdd}
                onChange={(e) => setAmountToAdd(parseInt(e.target.value))}
              />
            </QuantifyTimer>

            <DivTimer>
              <DivHour>
                <Min>{minutes.toString().padStart(2, "0")}</Min>
                <span>m</span>
              </DivHour>
              <p>:</p>
              <DivMin>
                <Second>{seconds.toString().padStart(2, "0")}</Second>
                <span>s</span>
              </DivMin>
            </DivTimer>

            <Button onClick={startTimer}>
              Começar <RxChevronRight size={24} color="#0F0E13" />
            </Button>
          </DivGoalDiary>

          {isGitHubUsernameModalOpen && (
            <motion.div
              className="github-username-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>Informe seu nome de usuário do GitHub</h1>
                <input
                  className="input-name"
                  type="text"
                  placeholder="Seu Nome"
                  value={githubUsername}
                  onChange={(e) => setGithubUsername(e.target.value)}
                  ref={usernameInputRef} // Adicione a referência aqui
                />
                <button onClick={closeGitHubUsernameModal}>
                  <IoCloseOutline size={24} color="#fff" />
                </button>
              </motion.div>
            </motion.div>
          )}

          {isModalOpen && (
            <div className="modal">
              <motion.div
                className="modal-content"
                onClick={increaseAmount}
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={mini_emoji} alt="" />
                <h1>Lembrete para beber água</h1>
                <button onClick={closeModal}>
                  <IoCloseOutline size={24} color="#fff" />
                </button>
              </motion.div>
            </div>
          )}
        </DivGoal>
      </Swapper>
    </Container>
  );
}

export default Home;
