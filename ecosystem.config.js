module.exports = {
  apps: [
    {
      // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
      name: "node_1",
      // pm2로 실행될 파일 경로
      script: "./node_1/bin/www",
      watch: false,
      instances: 1, // 0으로 설정시 CPU 코어 수 만큼 프로세스 생성
      log_date_format: "YYYY-MM-DD HH:mm Z",
      exec_mode: "cluster", // 클러스터 모드
    },
    {
      // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
      name: "node_2",
      // pm2로 실행될 파일 경로
      script: "./node_2/bin/www",
      watch: false,
      instances: 1, // 0으로 설정시 CPU 코어 수 만큼 프로세스 생성
      log_date_format: "YYYY-MM-DD HH:mm Z",
      exec_mode: "cluster", // 클러스터 모드
    },
  ],
};
