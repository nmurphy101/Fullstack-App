import jscrypto from "jscrypto";

/**
 * encrypt `data` buffer or string into a sha1 hash
 * @name sha1
 * @param {string}
 * @param {string} encoding
 * @returns {string} pw hash
 * @example
 *  sha1("foo bar") // => "3773dea65156909838fa6c22825cafe090ff8030"
 */
export const useCrypto = (): ((data: string, encoding?: string) => string) => {
  const crypto = (data: string, encoding = "sha1") => {
    if (encoding == "sha256") {
      return jscrypto.SHA256.hash(data).toString();
    } else {
      return jscrypto.SHA1.hash(data).toString();
    }
  };
  return crypto;
};
