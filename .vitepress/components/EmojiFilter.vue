<template>
  <div class="emoji-filter">
    <!-- 筛选标题 -->
    <div class="filter-header">
      <h3>筛选选项</h3>
    </div>

    <!-- 筛选按钮组 -->
    <div class="filter-buttons">
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click="toggleFilter(filter.id)"
        :class="{
          'filter-btn': true,
          'active': activeFilters.includes(filter.id)
        }"
      >
        <span class="emoji">{{ filter.emoji }}</span>
        <span class="label">{{ filter.label }}</span>
      </button>
    </div>

    <!-- 筛选状态 -->
    <div v-if="activeFilters.length > 0" class="filter-status">
      <span>当前筛选: </span>
      <span v-for="filterId in activeFilters" :key="'status-'+filterId" class="filter-tag">
        {{ getFilterLabel(filterId) }}
        <button @click="removeFilter(filterId)" class="remove-filter">×</button>
      </span>
      <button @click="clearFilters" class="clear-all">清除所有</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmojiFilter',
  data() {
    return {
      activeFilters: [],
      filters: [
        { id: 'star', emoji: '⭐', label: '星标推荐' },
        { id: 'opensource', emoji: '🔄', label: '开源项目' },
        { id: 'external', emoji: '🔗', label: '外部链接' }
      ]
    }
  },
  mounted() {
    // 从URL参数中读取筛选状态
    this.readFiltersFromURL();
    
    // 应用初始筛选
    this.applyFilters();
    
    // 监听URL变化
    window.addEventListener('popstate', this.readFiltersFromURL);
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.readFiltersFromURL);
  },
  methods: {
    toggleFilter(filterId) {
      if (this.activeFilters.includes(filterId)) {
        this.activeFilters = this.activeFilters.filter(id => id !== filterId);
      } else {
        this.activeFilters.push(filterId);
      }
      
      this.updateURL();
      this.applyFilters();
    },
    
    removeFilter(filterId) {
      this.activeFilters = this.activeFilters.filter(id => id !== filterId);
      this.updateURL();
      this.applyFilters();
    },
    
    clearFilters() {
      this.activeFilters = [];
      this.updateURL();
      this.applyFilters();
    },
    
    applyFilters() {
      // 获取所有表格行
      const rows = document.querySelectorAll('table tr');
      
      rows.forEach(row => {
        if (this.activeFilters.length === 0) {
          // 没有筛选时显示所有行
          row.style.display = '';
          return;
        }
        
        // 检查行是否包含所有激活的筛选条件
        const shouldShow = this.activeFilters.every(filterId => {
          return row.querySelector(`.emoji-${filterId}`);
        });
        
        row.style.display = shouldShow ? '' : 'none';
      });
    },
    
    updateURL() {
      const url = new URL(window.location);
      
      if (this.activeFilters.length > 0) {
        url.searchParams.set('filter', this.activeFilters.join(','));
      } else {
        url.searchParams.delete('filter');
      }
      
      window.history.pushState({}, '', url);
    },
    
    readFiltersFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      const filterParam = urlParams.get('filter');
      
      if (filterParam) {
        this.activeFilters = filterParam.split(',');
      } else {
        this.activeFilters = [];
      }
      
      this.applyFilters();
    },
    
    getFilterLabel(filterId) {
      const filter = this.filters.find(f => f.id === filterId);
      return filter ? filter.label : filterId;
    }
  }
}
</script>

<style scoped>
.emoji-filter {
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
}

.filter-header {
  margin-bottom: 1rem;
}

.filter-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-brand-soft);
}

.filter-btn.active {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-brand);
}

.filter-status {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background: var(--vp-c-brand-soft);
  border-radius: 4px;
  border: 1px solid var(--vp-c-brand);
}

.remove-filter {
  margin-left: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
}

.clear-all {
  margin-left: auto;
  padding: 0.25rem 0.5rem;
  background: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.clear-all:hover {
  background: var(--vp-c-gray-soft);
}

.emoji {
  font-size: 1.2rem;
}
</style>