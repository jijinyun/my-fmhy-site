// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import templateConfig from './config.template.mjs'

// 深度合并函数
function deepMerge(target: any, source: any): any {
  const output = { ...target }
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] })
        } else {
          output[key] = deepMerge(target[key], source[key])
        }
      } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        // 对数组合并进行特殊处理（避免重复项）
        output[key] = [...new Set([...target[key], ...source[key]])]
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }
  
  return output
}

// 辅助函数：检查是否为对象
function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item))
}

// 主配置
export default defineConfig(async () => {
  // 导入模板配置
  const baseConfig = templateConfig
  
  // 尝试导入覆盖配置
  let overrideConfig = {}
  try {
    // 使用动态导入，这样如果文件不存在也不会报错
    overrideConfig = (await import('./config.override.mjs')).default
    console.log('Override config loaded successfully')
  } catch (error) {
    console.warn('No override config found. Using template configuration only.')
  }
  
  // 合并配置
  const mergedConfig = deepMerge(baseConfig, overrideConfig)
  
  // 处理环境变量（如果有）
  if (process.env.SITE_URL) {
    mergedConfig.sitemap = mergedConfig.sitemap || {}
    mergedConfig.sitemap.hostname = process.env.SITE_URL
  }
  
  if (process.env.GITHUB_PROFILE) {
    mergedConfig.themeConfig = mergedConfig.themeConfig || {}
    mergedConfig.themeConfig.socialLinks = mergedConfig.themeConfig.socialLinks || []
    
    // 更新或添加GitHub社交链接
    const githubIndex = mergedConfig.themeConfig.socialLinks.findIndex(
      (link: any) => link.icon === 'github'
    )
    
    if (githubIndex >= 0) {
      mergedConfig.themeConfig.socialLinks[githubIndex].link = process.env.GITHUB_PROFILE
    } else {
      mergedConfig.themeConfig.socialLinks.push({
        icon: 'github',
        link: process.env.GITHUB_PROFILE
      })
    }
  }
  
  if (process.env.EDIT_LINK_PATTERN) {
    mergedConfig.themeConfig = mergedConfig.themeConfig || {}
    mergedConfig.themeConfig.editLink = mergedConfig.themeConfig.editLink || {}
    mergedConfig.themeConfig.editLink.pattern = process.env.EDIT_LINK_PATTERN
  }
  
  return mergedConfig
})