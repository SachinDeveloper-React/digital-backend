import Banner from '../models/banner.model'

interface Button {
  label: string
  link: string
  icon?: string
}

interface BannerUpdates {
  title?: string
  subtitle?: string
  backgroundImage?: string
  buttons?: Button[]
  animationIcons?: string[]
}

export const createBanner = async (data: BannerUpdates) => {
  const banner = new Banner(data)
  return banner.save()
}

export const getAllBanners = async () => {
  return Banner.find()
}

export const updateBannerById = async (id: string, updates: BannerUpdates) => {
  return Banner.findByIdAndUpdate(id, updates, { new: true })
}

export const deleteBannerById = async (id: string) => {
  return Banner.findByIdAndDelete(id)
}
