export interface YouTubeResource {
  title: string;
  url: string;
  keywords: string[];
}

export interface PersonaYouTubeConfig {
  channels: { name: string; url: string }[];
  resources: YouTubeResource[];
}

export const YOUTUBE_CONFIG: Record<string, PersonaYouTubeConfig> = {
  "hitesh-choudhary": {
    channels: [
      { name: "Chai aur Code", url: "https://www.youtube.com/@chaiaurcode" },
      { name: "Hitesh CodeLab", url: "https://www.youtube.com/@HiteshCodeLab" },
    ],
    resources: [
      {
        title: "Javascript for beginners (Chai aur Code)",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD",
        keywords: ["javascript", "js", "ecmascript", "vanilla"],
      },
      {
        title: "Chai aur React (with projects)",
        url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
        keywords: ["react", "reactjs", "jsx", "hooks", "frontend"],
      },
      {
        title: "Learn React with 10 projects",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq",
        keywords: ["react project", "react projects", "portfolio"],
      },
      {
        title: "Next.js course",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE",
        keywords: ["nextjs", "next.js", "next js", "ssr"],
      },
      {
        title: "TypeScript course",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW",
        keywords: ["typescript", "ts", "types"],
      },
      {
        title: "Docker — practical guide with projects",
        url: "https://www.youtube.com/watch?v=rr9cI4u1_88",
        keywords: ["docker", "container", "containers", "devops"],
      },
      {
        title: "How Node.js works",
        url: "https://www.youtube.com/watch?v=ooBxSg1Cl1w",
        keywords: ["nodejs", "node.js", "node js", "event loop", "libuv"],
      },
      {
        title: "React Native",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c",
        keywords: ["react native", "mobile app", "android", "ios"],
      },
      {
        title: "Golang course",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N",
        keywords: ["golang", "go lang", "go programming"],
      },
      {
        title: "Zustand state management",
        url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQMXekDgw7fRAsHmsbKWkwu",
        keywords: ["zustand", "state management"],
      },
      {
        title: "MongoDB with Docker (in Docker course)",
        url: "https://www.youtube.com/watch?v=rr9cI4u1_88",
        keywords: ["mongodb", "mongo", "database docker"],
      },
    ],
  },
  "piyush-garg": {
    channels: [
      { name: "Piyush Garg", url: "https://www.youtube.com/@piyushgargdev" },
    ],
    resources: [
      {
        title: "Master NodeJS",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
        keywords: ["nodejs", "node.js", "node js", "npm", "libuv", "event loop"],
      },
      {
        title: "Master Backend Development (Node, MongoDB, Express)",
        url: "https://www.youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH",
        keywords: ["backend", "mongodb", "mongo", "express", "api", "rest", "mern"],
      },
      {
        title: "Node JS API with Express, TypeScript & MySQL",
        url: "https://www.youtube.com/playlist?list=PLsCs8YwnvP88lUF2Z5qRP28pXBh3ef9Rz",
        keywords: ["typescript", "mysql", "express api", "rest api", "sql"],
      },
      {
        title: "System Design playlist",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sBlBWRox2V2tg9QJ2zr4M3o",
        keywords: [
          "system design",
          "scalability",
          "scaling",
          "architecture",
          "microservices",
          "load balancer",
          "database scaling",
          "hld",
          "lld",
        ],
      },
      {
        title: "Master Docker Containerisation & Deployments",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sDc2woh6XncR9_a310zaAyJ",
        keywords: ["docker", "container", "containers", "deployment", "devops", "ecs"],
      },
      {
        title: "Complete React Tutorial Series",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sCHqHtgbjg1lSYgWebm1dyI",
        keywords: ["react", "reactjs", "jsx", "hooks", "frontend"],
      },
      {
        title: "Free Open Source BootCamp (full-stack projects)",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sAT6CotNj0iffhRV89SkNK9",
        keywords: [
          "full stack",
          "fullstack",
          "project",
          "bootcamp",
          "nextjs",
          "next.js",
          "build project",
        ],
      },
      {
        title: "Build a Vercel Clone from scratch",
        url: "https://www.youtube.com/watch?v=JD3NQsB3TQI",
        keywords: ["vercel", "deploy", "hosting", "clone project", "production"],
      },
      {
        title: "Kubernetes & orchestration (via Docker playlist)",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sDc2woh6XncR9_a310zaAyJ",
        keywords: ["kubernetes", "k8s", "orchestration", "aws ecs"],
      },
      {
        title: "Building products & startups (BootCamp projects)",
        url: "https://www.youtube.com/playlist?list=PLinedj3B30sAT6CotNj0iffhRV89SkNK9",
        keywords: [
          "startup",
          "entrepreneur",
          "founder",
          "business",
          "saas",
          "product",
          "ship",
          "building",
        ],
      },
      {
        title: "GenAI & agents (latest on channel)",
        url: "https://www.youtube.com/@piyushgargdev/videos",
        keywords: ["genai", "llm", "rag", "agents", "ai", "machine learning", "mcp"],
      },
    ],
  },
};
