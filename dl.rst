.. contents::


Extractors
==========

Lingua includes a number of extractors:

* `python`: handles Python source code.
* `chameleon`: handles `Chameleon <http://www.pagetemplates.org/>`_ files,
  using the `Zope i18n syntax
  <https://chameleon.readthedocs.org/en/latest/reference.html#id51>`_
* `zcml`: handles Zope Configuration Markup Language (ZCML) files.
* `zope`: a variant of the chameleon extractor, which assumes the default
  expression language is `TALES
  <https://chameleon.readthedocs.org/en/latest/reference.html#expressions-tales>`_
  instead of Python.
* `xml`: old name for the `chameleon` extractor. This should not be used
  anymore.
