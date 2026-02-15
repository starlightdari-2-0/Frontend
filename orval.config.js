module.exports = {
    starlight: {
        input: `${process.env.NEXT_PUBLIC_SERVER_URL}/v3/api-docs`,
        output: {
            mode: "tags-split", // API 태그별로 파일 분리
            target: "./src/api/generated/starlight.ts",
            schemas: "./src/api/generated/model",
            client: "react-query", // TanStack Query(React Query) 훅 생성
            override: {
                mutator: {
                    path: "./src/api/custom-instance.ts", // 위에서 만든 커스텀 인스턴스 연결
                    name: "customInstance",
                },
            },
        },
    },
};