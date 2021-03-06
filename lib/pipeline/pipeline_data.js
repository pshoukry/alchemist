"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class PipelineData {
  constructor() {
    this.data = {};
    this.invalidData = {};
  }

  getData() {
    return this.data;
  }

  putData(data) {
    return this.data = data;
  }

  hasInvalidData() {
    return this.invalidData.length > 0;
  }

  getInvalidData() {
    return this.invalidData;
  }

  putInvalidData(invalidData) {
    return this.invalidData = invalidData;
  }
}
exports.default = PipelineData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlbGluZS9waXBlbGluZV9kYXRhLmpzIl0sIm5hbWVzIjpbIlBpcGVsaW5lRGF0YSIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImludmFsaWREYXRhIiwiZ2V0RGF0YSIsInB1dERhdGEiLCJoYXNJbnZhbGlkRGF0YSIsImxlbmd0aCIsImdldEludmFsaWREYXRhIiwicHV0SW52YWxpZERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWUsTUFBTUEsWUFBTixDQUFtQjtBQUNoQ0MsZ0JBQWM7QUFDWixTQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDs7QUFFREMsWUFBVTtBQUNSLFdBQU8sS0FBS0YsSUFBWjtBQUNEOztBQUVERyxVQUFRSCxJQUFSLEVBQWM7QUFDWixXQUFPLEtBQUtBLElBQUwsR0FBWUEsSUFBbkI7QUFDRDs7QUFFREksbUJBQWlCO0FBQ2YsV0FBTyxLQUFLSCxXQUFMLENBQWlCSSxNQUFqQixHQUEwQixDQUFqQztBQUNEOztBQUVEQyxtQkFBaUI7QUFDZixXQUFPLEtBQUtMLFdBQVo7QUFDRDs7QUFFRE0saUJBQWVOLFdBQWYsRUFBNEI7QUFDMUIsV0FBTyxLQUFLQSxXQUFMLEdBQW1CQSxXQUExQjtBQUNEO0FBeEIrQjtrQkFBYkgsWSIsImZpbGUiOiJwaXBlbGluZV9kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlwZWxpbmVEYXRhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0ge31cbiAgICB0aGlzLmludmFsaWREYXRhID0ge31cbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVxuICB9XG5cbiAgcHV0RGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSA9IGRhdGFcbiAgfVxuXG4gIGhhc0ludmFsaWREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWREYXRhLmxlbmd0aCA+IDBcbiAgfVxuXG4gIGdldEludmFsaWREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWREYXRhXG4gIH1cblxuICBwdXRJbnZhbGlkRGF0YShpbnZhbGlkRGF0YSkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWREYXRhID0gaW52YWxpZERhdGFcbiAgfVxufVxuXG4iXX0=