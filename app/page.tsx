"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Star,
  Calendar,
  MapPin,
  Phone,
  Award,
  Users,
  Zap,
  Server,
  Palette,
  Cpu,
  ShoppingCart,
  MicroscopeIcon as Microchip,
  Eye,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isLoaded, setIsLoaded] = useState(false)
  const [featureCarousels, setFeatureCarousels] = useState({})
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const skills = [
    { name: "Node.js", level: 90, icon: Server },
    { name: "React", level: 85, icon: Code },
    { name: "TypeScript", level: 80, icon: Code },
    { name: "MySQL", level: 85, icon: Database },
    { name: "Redis", level: 75, icon: Database },
    { name: "Socket.IO", level: 80, icon: Zap },
  ]

  const experiences = [
    {
      title: "Internship - Backend Developer",
      company: "DIDOTEK COMPANY LIMITED ",
      period: "02/2025 - 05/2025",
      description: "Phát triển các ứng dụng web và hệ thống IoT cho khách hàng",
      achievements: [
        "Phát triển các API backend cho hệ thống CRM thực tế bằng Flask và Prisma.",
        "Triển khai ứng dụng trên Nền tảng Đám mây Google bằng Docker và lập tài liệu API một cách chuyên nghiệp bằng Swagger.",
        "Tích hợp các tính năng như quản lý sản phẩm, kho hàng, nhân viên, đơn hàng và vai trò người dùng.",
        "Tích hợp Redis và Kafka để tối ưu hóa hiệu suất và khả năng mở rộng của hệ thống.",
      ],
    },
  ]

  const projects = [
    {
      id: "ecommerce",
      title: "SmartNet E-commerce Platform",
      subtitle: "Nền tảng thương mại điện tử hoàn chỉnh",
      description:
        "Hệ thống quản lý thương mại điện tử với đầy đủ tính năng từ quản lý sản phẩm, đơn hàng, địa chỉ, vai trò, khách hàng đến thanh toán và báo cáo thống kê. Đồng thời tích hợp các tính năng của quy trình sản xuất sản phẩm và quản lý kho hàng bao gồm nhập, xuất, tồn kho.",
      mainImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      features: [
        {
          title: "Quản lý hóa đơn",
          description: "Hệ thống tạo, quản lý và theo dõi hóa đơn tự động",
          images: [
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          ],
        },
        {
          title: "Phiếu xuất/nhập kho",
          description: "Quản lý kho hàng với phiếu xuất nhập tự động",
          images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          ],
        },
        {
          title: "Quản lý sản xuất",
          description: "Theo dõi quy trình sản xuất và chất lượng sản phẩm",
          images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
          ],
        },
      ],
      tech: ["Node.js", "Express", "React", "Prisma", "MySQL", "Redis", "JWT", "Socket.IO", "Docker", "Swagger"],
      stats: {
        functions: "92+",
        apis: "24",
        duration: "4 tháng",
        modules: "10",
      },
      icon: ShoppingCart,
      color: "from-blue-500 to-purple-600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "iot",
      title: "IoT HomeConnect Platform",
      subtitle: "Hệ thống quản lý và điều khiển thiết bị IoT",
      description:
        "Nền tảng IoT với khả năng điều khiển real-time, tự động hóa thiết bị và hệ thống cảnh báo khẩn cấp cho khách hàng.",
      mainImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      features: [
        {
          title: "Dashboard điều khiển",
          description: "Giao diện trực quan để điều khiển tất cả thiết bị IoT",
          images: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
          ],
        },
        {
          title: "Monitoring real-time",
          description: "Theo dõi trạng thái thiết bị và cảnh báo tức thời",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          ],
        },
        {
          title: "Automation system",
          description: "Tự động hóa thiết bị với logic AND/OR phức tạp",
          images: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
          ],
        },
      ],
      tech: ["Node.js", "TypeScript", "React", "Socket.IO", "Firebase FCM", "Prisma", "Redis", "Docker", "Swagger"],
      stats: {
        functions: "120+",
        devices: "6 loại",
        concurrent: "100+",
        effects: "15+",
      },
      icon: Microchip,
      color: "from-pink-500 to-red-500",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Product Manager",
      company: "Tech Company",
      content: "Dự án e-commerce được phát triển rất chuyên nghiệp, đáp ứng đầy đủ yêu cầu và có performance tốt.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị B",
      role: "CTO",
      company: "IoT Startup",
      content: "Hệ thống IoT được thiết kế rất tốt, real-time communication hoạt động ổn định và đáng tin cậy.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

    // Carousel functions
    const updateFeatureCarousel = (projectId: string, featureIndex: number, imageIndex: number) => {
      setFeatureCarousels((prev) => ({
        ...prev,
        [`${projectId}-${featureIndex}`]: imageIndex,
      }))
    }
  
    const getFeatureCarouselIndex = (projectId: string, featureIndex: number) => {
      return (featureCarousels as Record<string, number>)[`${projectId}-${featureIndex}`] || 0
    }
  
    const nextImage = (projectId: string, featureIndex: number, totalImages: number) => {
      const currentIndex = getFeatureCarouselIndex(projectId, featureIndex)
      const nextIndex = (currentIndex + 1) % totalImages
      updateFeatureCarousel(projectId, featureIndex, nextIndex)
    }
  
    const prevImage = (projectId: string, featureIndex: number, totalImages: number) => {
      const currentIndex = getFeatureCarouselIndex(projectId, featureIndex)
      const prevIndex = (currentIndex - 1 + totalImages) % totalImages
      updateFeatureCarousel(projectId, featureIndex, prevIndex)
    }  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              👨‍💻
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
              Phan Trọng Thắng
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Chuyên phát triển ứng dụng web hiện đại và hệ thống IoT
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Code className="w-4 h-4 mr-2" />
                Node.js
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                React
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Database className="w-4 h-4 mr-2" />
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                IoT
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Code2 className="w-4 h-4 mr-2" />
                Python
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Eye className="w-4 h-4 mr-2" />
                Xem dự án
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Tải CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Liên hệ
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="about" className="data-[state=active]:bg-white data-[state=active]:text-black">
              <Users className="w-4 h-4 mr-2" />
              Giới thiệu
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-white data-[state=active]:text-black">
              <Zap className="w-4 h-4 mr-2" />
              Kỹ năng
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:text-black">
              <Calendar className="w-4 h-4 mr-2" />
              Kinh nghiệm
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:text-black">
              <Code className="w-4 h-4 mr-2" />
              Dự án
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-white data-[state=active]:text-black">
              <Mail className="w-4 h-4 mr-2" />
              Liên hệ
            </TabsTrigger>
          </TabsList>

          {/* About Section */}
          <TabsContent value="about">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Users className="w-6 h-6 mr-2" />
                      Về tôi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      👋 Xin chào! Tôi là một Full Stack Developer với kinh nghiệm trong việc phát triển ứng dụng web và hệ thống IoT. Tôi đam mê tạo ra những sản phẩm có giá trị thực tế và trải nghiệm người dùng tuyệt vời.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      🎯 Mục tiêu của tôi là trở thành một người mang đến các giải pháp có thể áp dụng vào thực tế, có khả năng giải quyết các bài toán nghiệp vụ phức tạp. Ý kiến của khách hàng luôn được quan tâm và được đặt lên hàng đầu.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">212+</div>
                        <div className="text-sm text-gray-400">Chức năng</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                          <div className="text-2xl font-bold text-purple-400">5+</div>
                          <div className="text-sm text-gray-400">Dự án</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Award className="w-6 h-6 mr-2" />
                      Thành tựu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">E-commerce Platform</h4>
                          <p className="text-sm text-gray-400">Phát triển hệ thống với 92+ chức năng</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">IoT Platform</h4>
                          <p className="text-sm text-gray-400">Hệ thống quản lý 100+ thiết bị đồng thời</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Real-time Communication</h4>
                          <p className="text-sm text-gray-400">Tích hợp WebSocket và Socket.IO</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">Emergency Alert System</h4>
                          <p className="text-sm text-gray-400">Hệ thống cảnh báo với FCM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Skills Section */}
          <TabsContent value="skills">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Zap className="w-6 h-6 mr-2" />
                      Kỹ năng chuyên môn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <skill.icon className="w-4 h-4" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Server className="w-5 h-5 mr-2" />
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express", "TypeScript", "Prisma", "MySQL", "Redis", "JWT", "Socket.IO"].map(
                        (tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Palette className="w-5 h-5 mr-2" />
                      Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["React", "JavaScript", "Tailwind CSS", "Responsive Design", "UI/UX"].map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Cpu className="w-5 h-5 mr-2" />
                      IoT & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Socket.IO", "Firebase FCM", "Git", "Docker", "RESTful APIs"].map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Experience Section */}
          <TabsContent value="experience">
            <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Calendar className="w-6 h-6 mr-2" />
                      Kinh nghiệm làm việc
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="relative pl-8 border-l-2 border-blue-500"
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span>{exp.period}</span>
                            </div>
                            <p className="text-gray-300">{exp.description}</p>
                            <ul className="space-y-1 mt-4">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                                  <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Projects Section */}
          <TabsContent value="projects">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 group">
                    <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription className="text-gray-400">{project.subtitle}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <img
                        src={project.mainImage || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-white/5 rounded">
                            <div className="font-bold text-lg">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" className="flex-1">
                              <Eye className="w-4 h-4 mr-2" />
                              Chi tiết
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 text-white border-slate-700">
                            <DialogHeader>
                              <DialogTitle className="flex items-center space-x-2">
                                <project.icon className="w-6 h-6" />
                                <span>{project.title}</span>
                              </DialogTitle>
                              <DialogDescription className="text-gray-400">{project.subtitle}</DialogDescription>
                            </DialogHeader>

                            <div className="space-y-8">
                              {/* Main Project Image */}
                              <div className="main-project-image">
                                <img
                                  src={project.mainImage || "/placeholder.svg"}
                                  alt={project.title}
                                  className="w-full h-80 object-cover rounded-lg"
                                />
                                <div className="mt-4">
                                  <h4 className="text-lg font-semibold mb-2 text-white">Mô tả dự án</h4>
                                  <p className="text-gray-300">{project.description}</p>
                                </div>
                              </div>

                              {/* Features with Carousels */}
                              <div className="features-section">
                                <h4 className="text-xl font-semibold mb-6 text-white">Tính năng chính</h4>
                                <div className="space-y-8">
                                  {project.features.map((feature, featureIndex) => (
                                    <div
                                      key={featureIndex}
                                      className="feature-item bg-white/5 rounded-lg p-6 border border-white/10"
                                    >
                                      <div className="feature-header mb-4">
                                        <h5 className="text-lg font-semibold text-white mb-2">{feature.title}</h5>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                      </div>

                                      {/* Feature Image Carousel */}
                                      <div className="feature-carousel relative">
                                        <div className="carousel-container relative">
                                          <img
                                            src={
                                              feature.images[getFeatureCarouselIndex(project.id, featureIndex)] ||
                                              "/placeholder.svg"
                                            }
                                            alt={`${feature.title} - ${getFeatureCarouselIndex(project.id, featureIndex) + 1}`}
                                            className="w-full h-64 object-cover rounded-lg transition-opacity duration-300"
                                          />

                                          {/* Navigation Arrows */}
                                          <button
                                            onClick={() => prevImage(project.id, featureIndex, feature.images.length)}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                                          >
                                            <ChevronLeft className="w-4 h-4" />
                                          </button>
                                          <button
                                            onClick={() => nextImage(project.id, featureIndex, feature.images.length)}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                                          >
                                            <ChevronRight className="w-4 h-4" />
                                          </button>

                                          {/* Carousel Dots */}
                                          <div className="flex justify-center space-x-2 mt-4">
                                            {feature.images.map((_, imageIndex) => (
                                              <button
                                                key={imageIndex}
                                                onClick={() =>
                                                  updateFeatureCarousel(project.id, featureIndex, imageIndex)
                                                }
                                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                                  getFeatureCarouselIndex(project.id, featureIndex) === imageIndex
                                                    ? "bg-blue-500 scale-125"
                                                    : "bg-white/30 hover:bg-white/50"
                                                }`}
                                              />
                                            ))}
                                          </div>
                                        </div>

                                        {/* Carousel Thumbnails */}
                                        <div className="carousel-thumbnails flex space-x-2 mt-4 overflow-x-auto pb-2">
                                          {feature.images.map((image, imageIndex) => (
                                            <button
                                              key={imageIndex}
                                              onClick={() =>
                                                updateFeatureCarousel(project.id, featureIndex, imageIndex)
                                              }
                                              className={`flex-shrink-0 border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                                                getFeatureCarouselIndex(project.id, featureIndex) === imageIndex
                                                  ? "border-blue-500 shadow-lg"
                                                  : "border-transparent hover:border-white/30"
                                              }`}
                                            >
                                              <img
                                                src={image || "/placeholder.svg"}
                                                alt={`${feature.title} thumbnail ${imageIndex + 1}`}
                                                className="w-20 h-16 object-cover"
                                              />
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Tech Stack */}
                              <div>
                                <h4 className="text-lg font-semibold mb-3 text-white">Công nghệ sử dụng</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.tech.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex space-x-4">
                                <Button asChild>
                                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Xem Demo
                                  </a>
                                </Button>
                                <Button variant="outline" asChild>
                                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    Source Code
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          {/* Contact Section */}
          <TabsContent value="contact">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Mail className="w-6 h-6 mr-2" />
                      Liên hệ với tôi
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Bạn quan tâm đến dự án của tôi? Hãy liên hệ để trao đổi thêm!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-400">ptthang2910@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="font-medium">Điện thoại</p>
                        <p className="text-gray-400">038 797 6595</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-medium">Địa chỉ</p>
                        <p className="text-gray-400">Việt Nam</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <p className="font-medium mb-4">Kết nối với tôi</p>
                      <div className="flex space-x-4">
                        <Button size="sm" variant="outline" asChild className="text-black hover:text-blue-500">
                          <a href="https://github.com/TrongThang" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2 text-black" />
                            GitHub
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="text-black hover:text-blue-500">
                          <a href="https://www.linkedin.com/in/thang-phan-trong-webdeveloper" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="text-black hover:text-blue-500">
                          <a href="mailto:ptthang2910@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </a>
                        </Button>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      Thống kê tổng quan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <div className="text-3xl font-bold text-blue-400">212+</div>
                        <div className="text-sm text-gray-400 mt-2">Tổng chức năng</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                        <div className="text-3xl font-bold text-green-400">2</div>
                        <div className="text-sm text-gray-400 mt-2">Dự án lớn</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        <div className="text-3xl font-bold text-purple-400">100+</div>
                        <div className="text-sm text-gray-400 mt-2">Thiết bị IoT</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-lg">
                        <div className="text-3xl font-bold text-yellow-400">2+</div>
                        <div className="text-sm text-gray-400 mt-2">Năm kinh nghiệm</div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-white/5 rounded-lg">
                      <h4 className="font-semibold mb-4 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Sẵn sàng làm việc
                      </h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Tôi hiện đang mở cho các cơ hội freelance và full-time. Hãy liên hệ để thảo luận về dự án của
                        bạn!
                      </p>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Gửi tin nhắn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Portfolio. Made with ❤️ using Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
